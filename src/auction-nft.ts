import { log } from "matchstick-as";
import {
  Burned as BurnedEvent,
  Minted as MintedEvent,
  auctionNft as AuctionNftContract,
} from "../generated/AuctionNFT/AuctionNFT";
import { AuctionNft } from "../generated/schema";
import { store } from "@graphprotocol/graph-ts";

export function handleMinted(event: MintedEvent): void {
  let auctionNFT = new AuctionNft(event.params.tokenId.toHexString());

  auctionNFT.tokenId = event.params.tokenId;
  let auctionNftContract = AuctionNftContract.bind(event.address);
  auctionNFT.tokenUri = auctionNftContract.tokenURI(event.params.tokenId);
  auctionNFT.owner = event.params.owner;
  auctionNFT.guardian = event.params.guardian.toHexString();
  auctionNFT.mintAt = event.block.timestamp;
  // auctionNFT.AssetStatus = "SLEEP";

  auctionNFT.save();
}

export function handleBurned(event: BurnedEvent): void {
  // let auctionNFT = AuctionNft.load(event.params.tokenId.toHexString());

  // // auctionNFT!.AssetStatus = "Burned";
  // // auctionNFT!.burnAt = event.block.timestamp;

  // auctionNFT?.save();

  log.info(
    `Deleeted AuctionNFT with ${event.params.tokenId.toHexString()}`,
    []
  );
  store.remove("AuctionNft", event.params.tokenId.toHexString());
}
