import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AssertListed,
  AuctionEnd,
  GuardianAdded,
  GuardianWithdraw,
  ItemAdded,
  ItemBreakRefund,
  ItemRedeem,
  ListingCancel,
  ListingSell,
  OwnershipTransferred,
  ProceedsWithdraw,
  SubmittedBid
} from "../generated/auctionHouse/auctionHouse"

export function createAssertListedEvent(
  seller: Address,
  tokenId: BigInt,
  guardian: Address
): AssertListed {
  let assertListedEvent = changetype<AssertListed>(newMockEvent())

  assertListedEvent.parameters = new Array()

  assertListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  assertListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  assertListedEvent.parameters.push(
    new ethereum.EventParam("guardian", ethereum.Value.fromAddress(guardian))
  )

  return assertListedEvent
}

export function createAuctionEndEvent(tokenId: BigInt): AuctionEnd {
  let auctionEndEvent = changetype<AuctionEnd>(newMockEvent())

  auctionEndEvent.parameters = new Array()

  auctionEndEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return auctionEndEvent
}

export function createGuardianAddedEvent(
  guardian: Address,
  name: string,
  location: string,
  stacking: BigInt
): GuardianAdded {
  let guardianAddedEvent = changetype<GuardianAdded>(newMockEvent())

  guardianAddedEvent.parameters = new Array()

  guardianAddedEvent.parameters.push(
    new ethereum.EventParam("guardian", ethereum.Value.fromAddress(guardian))
  )
  guardianAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  guardianAddedEvent.parameters.push(
    new ethereum.EventParam("location", ethereum.Value.fromString(location))
  )
  guardianAddedEvent.parameters.push(
    new ethereum.EventParam(
      "stacking",
      ethereum.Value.fromUnsignedBigInt(stacking)
    )
  )

  return guardianAddedEvent
}

export function createGuardianWithdrawEvent(
  guardian: Address,
  amount: BigInt
): GuardianWithdraw {
  let guardianWithdrawEvent = changetype<GuardianWithdraw>(newMockEvent())

  guardianWithdrawEvent.parameters = new Array()

  guardianWithdrawEvent.parameters.push(
    new ethereum.EventParam("guardian", ethereum.Value.fromAddress(guardian))
  )
  guardianWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return guardianWithdrawEvent
}

export function createItemAddedEvent(
  guardian: Address,
  tokenId: BigInt
): ItemAdded {
  let itemAddedEvent = changetype<ItemAdded>(newMockEvent())

  itemAddedEvent.parameters = new Array()

  itemAddedEvent.parameters.push(
    new ethereum.EventParam("guardian", ethereum.Value.fromAddress(guardian))
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return itemAddedEvent
}

export function createItemBreakRefundEvent(
  guardian: Address,
  owner: Address,
  tokenId: BigInt,
  refundPrice: BigInt
): ItemBreakRefund {
  let itemBreakRefundEvent = changetype<ItemBreakRefund>(newMockEvent())

  itemBreakRefundEvent.parameters = new Array()

  itemBreakRefundEvent.parameters.push(
    new ethereum.EventParam("guardian", ethereum.Value.fromAddress(guardian))
  )
  itemBreakRefundEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  itemBreakRefundEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemBreakRefundEvent.parameters.push(
    new ethereum.EventParam(
      "refundPrice",
      ethereum.Value.fromUnsignedBigInt(refundPrice)
    )
  )

  return itemBreakRefundEvent
}

export function createItemRedeemEvent(
  guardian: Address,
  tokenId: BigInt
): ItemRedeem {
  let itemRedeemEvent = changetype<ItemRedeem>(newMockEvent())

  itemRedeemEvent.parameters = new Array()

  itemRedeemEvent.parameters.push(
    new ethereum.EventParam("guardian", ethereum.Value.fromAddress(guardian))
  )
  itemRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return itemRedeemEvent
}

export function createListingCancelEvent(tokneId: BigInt): ListingCancel {
  let listingCancelEvent = changetype<ListingCancel>(newMockEvent())

  listingCancelEvent.parameters = new Array()

  listingCancelEvent.parameters.push(
    new ethereum.EventParam(
      "tokneId",
      ethereum.Value.fromUnsignedBigInt(tokneId)
    )
  )

  return listingCancelEvent
}

export function createListingSellEvent(tokenId: BigInt): ListingSell {
  let listingSellEvent = changetype<ListingSell>(newMockEvent())

  listingSellEvent.parameters = new Array()

  listingSellEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return listingSellEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProceedsWithdrawEvent(
  user: Address,
  proceeds: BigInt
): ProceedsWithdraw {
  let proceedsWithdrawEvent = changetype<ProceedsWithdraw>(newMockEvent())

  proceedsWithdrawEvent.parameters = new Array()

  proceedsWithdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  proceedsWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "proceeds",
      ethereum.Value.fromUnsignedBigInt(proceeds)
    )
  )

  return proceedsWithdrawEvent
}

export function createSubmittedBidEvent(
  buyer: Address,
  tokenId: BigInt,
  bidPrice: BigInt
): SubmittedBid {
  let submittedBidEvent = changetype<SubmittedBid>(newMockEvent())

  submittedBidEvent.parameters = new Array()

  submittedBidEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  submittedBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  submittedBidEvent.parameters.push(
    new ethereum.EventParam(
      "bidPrice",
      ethereum.Value.fromUnsignedBigInt(bidPrice)
    )
  )

  return submittedBidEvent
}
