import {
  AssertListed as AssertListedEvent,
  AuctionEnd as AuctionEndEvent,
  GuardianAdded as GuardianAddedEvent,
  GuardianWithdraw as GuardianWithdrawEvent,
  ItemAdded as ItemAddedEvent,
  ItemBreakRefund as ItemBreakRefundEvent,
  ItemRedeem as ItemRedeemEvent,
  ListingCancel as ListingCancelEvent,
  ListingSell as ListingSellEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProceedsWithdraw as ProceedsWithdrawEvent,
  SubmittedBid as SubmittedBidEvent,
  auctionHouse as AuctionHouseContract,
} from "../generated/auctionHouse/auctionHouse";
import {
  Guardian,
  Listing,
  Bid,
  BidLoader
} from "../generated/schema";
import { store } from "@graphprotocol/graph-ts";
import { log } from "@graphprotocol/graph-ts";

export function handleAssertListed(event: AssertListedEvent): void {
  let listing = new Listing(event.params.tokenId.toHexString());
  let auctionHouseContract = AuctionHouseContract.bind(event.address);
  let c_listing = auctionHouseContract.s_listings(event.params.tokenId);

  listing.seller = event.params.seller;
  listing.price = c_listing.getPrice();
  listing.netPrice = c_listing.getNetPrice();
  listing.status = "Listing";
  listing.startAt = c_listing.getStartAt();
  listing.endAt = c_listing.getEndAt();
  listing.guardian = event.params.guardian.toHexString();
  listing.auctionNft = event.params.tokenId.toHexString();

  listing.save();
}

export function handleAuctionEnd(event: AuctionEndEvent): void {
  let listing = new Listing(event.params.tokenId.toHexString());

  if (listing != null) {
    let bidLoader = new BidLoader("Listing", event.params.tokenId.toHexString(), "bids");
    let bids = bidLoader.load();

    bids.forEach((bid: Bid) => {
      log.info("Removing Bid: {}", [bid.id]);
      store.remove("Bid", bid.id);
    });

    // Remove the listing
    log.info("Removing Listing: {}", [event.params.tokenId.toHexString()]);
    store.remove("Listing", event.params.tokenId.toHexString());
  } else {
    log.warning("Listing not found: {}", [event.params.tokenId.toHexString()]);
  }
}

export function handleGuardianAdded(event: GuardianAddedEvent): void {
  let guardian = new Guardian(event.params.guardian.toHexString());
  guardian.guardian = event.params.guardian;
  guardian.name = event.params.name;
  guardian.location = event.params.location;
  guardian.stacking = event.params.stacking;
  guardian.save();
}

export function handleGuardianWithdraw(event: GuardianWithdrawEvent): void {
  store.remove("Guardian", event.params.guardian.toHexString());
}

export function handleItemRedeem(event: ItemRedeemEvent): void {
  store.remove("AuctionNft", event.params.tokenId.toHexString());
}

export function handleListingCancel(event: ListingCancelEvent): void {
  store.remove("Listing", event.params.tokneId.toHexString());
}

export function handleListingSell(event: ListingSellEvent): void {
  let listing = Listing.load(event.params.tokenId.toHexString());

  if (listing == null) {
    log.warning("No listing found for ID {}", [
      event.params.tokenId.toString(),
    ]);
    return;
  }

  listing.status = "Selling";
  listing.save();

  // I want to log in the graph if no listing is found
}

export function handleSubmittedBid(event: SubmittedBidEvent): void {
  let bid = new Bid(event.transaction.hash.toHexString());

  let listing = Listing.load(event.params.tokenId.toHexString());
  if (listing == null) {
    log.warning("bid No listing found for ID {}", [
      event.params.tokenId.toString(),
    ]);
    return;
  }

  listing.netPrice = event.params.bidPrice;

  bid.buyer = event.params.buyer;
  bid.listing = event.params.tokenId.toHexString();
  bid.bidPrice = event.params.bidPrice;
  bid.blockTimestamp = event.block.timestamp;

  bid.save();
  listing.save();
}

// export function handleProceedsWithdraw(event: ProceedsWithdrawEvent): void {
//   let entity = new ProceedsWithdraw(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   );
//   entity.user = event.params.user;
//   entity.proceeds = event.params.proceeds;

//   entity.blockNumber = event.block.number;
//   entity.blockTimestamp = event.block.timestamp;
//   entity.transactionHash = event.transaction.hash;

//   entity.save();
// }

// export function handleItemAdded(event: ItemAddedEvent): void {
//   let guardian = Guardian.load(event.params.guardian.toHexString());
//   // guardian?.auctionNft .push??
// }

// export function handleItemBreakRefund(event: ItemBreakRefundEvent): void {
// let entity = new ItemBreakRefund(
//   event.transaction.hash.concatI32(event.logIndex.toI32())
// );
// entity.guardian = event.params.guardian;
// entity.owner = event.params.owner;
// entity.tokenId = event.params.tokenId;
// entity.refundPrice = event.params.refundPrice;
// entity.blockNumber = event.block.number;
// entity.blockTimestamp = event.block.timestamp;
// entity.transactionHash = event.transaction.hash;
// entity.save();
// }


