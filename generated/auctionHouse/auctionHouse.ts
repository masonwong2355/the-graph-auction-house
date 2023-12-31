// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AssertListed extends ethereum.Event {
  get params(): AssertListed__Params {
    return new AssertListed__Params(this);
  }
}

export class AssertListed__Params {
  _event: AssertListed;

  constructor(event: AssertListed) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get guardian(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class AuctionEnd extends ethereum.Event {
  get params(): AuctionEnd__Params {
    return new AuctionEnd__Params(this);
  }
}

export class AuctionEnd__Params {
  _event: AuctionEnd;

  constructor(event: AuctionEnd) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class GuardianAdded extends ethereum.Event {
  get params(): GuardianAdded__Params {
    return new GuardianAdded__Params(this);
  }
}

export class GuardianAdded__Params {
  _event: GuardianAdded;

  constructor(event: GuardianAdded) {
    this._event = event;
  }

  get guardian(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get location(): string {
    return this._event.parameters[2].value.toString();
  }

  get stacking(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class GuardianWithdraw extends ethereum.Event {
  get params(): GuardianWithdraw__Params {
    return new GuardianWithdraw__Params(this);
  }
}

export class GuardianWithdraw__Params {
  _event: GuardianWithdraw;

  constructor(event: GuardianWithdraw) {
    this._event = event;
  }

  get guardian(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ItemAdded extends ethereum.Event {
  get params(): ItemAdded__Params {
    return new ItemAdded__Params(this);
  }
}

export class ItemAdded__Params {
  _event: ItemAdded;

  constructor(event: ItemAdded) {
    this._event = event;
  }

  get guardian(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ItemBreakRefund extends ethereum.Event {
  get params(): ItemBreakRefund__Params {
    return new ItemBreakRefund__Params(this);
  }
}

export class ItemBreakRefund__Params {
  _event: ItemBreakRefund;

  constructor(event: ItemBreakRefund) {
    this._event = event;
  }

  get guardian(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get refundPrice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ItemRedeem extends ethereum.Event {
  get params(): ItemRedeem__Params {
    return new ItemRedeem__Params(this);
  }
}

export class ItemRedeem__Params {
  _event: ItemRedeem;

  constructor(event: ItemRedeem) {
    this._event = event;
  }

  get guardian(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ListingCancel extends ethereum.Event {
  get params(): ListingCancel__Params {
    return new ListingCancel__Params(this);
  }
}

export class ListingCancel__Params {
  _event: ListingCancel;

  constructor(event: ListingCancel) {
    this._event = event;
  }

  get tokneId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ListingSell extends ethereum.Event {
  get params(): ListingSell__Params {
    return new ListingSell__Params(this);
  }
}

export class ListingSell__Params {
  _event: ListingSell;

  constructor(event: ListingSell) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProceedsWithdraw extends ethereum.Event {
  get params(): ProceedsWithdraw__Params {
    return new ProceedsWithdraw__Params(this);
  }
}

export class ProceedsWithdraw__Params {
  _event: ProceedsWithdraw;

  constructor(event: ProceedsWithdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proceeds(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SubmittedBid extends ethereum.Event {
  get params(): SubmittedBid__Params {
    return new SubmittedBid__Params(this);
  }
}

export class SubmittedBid__Params {
  _event: SubmittedBid;

  constructor(event: SubmittedBid) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get bidPrice(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class auctionHouse__checkUpkeepResult {
  value0: boolean;
  value1: Bytes;

  constructor(value0: boolean, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }

  getUpkeepNeeded(): boolean {
    return this.value0;
  }

  getPerformData(): Bytes {
    return this.value1;
  }
}

export class auctionHouse__s_listingsResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: i32;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: i32,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3))
    );
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getSeller(): Address {
    return this.value0;
  }

  getPrice(): BigInt {
    return this.value1;
  }

  getNetPrice(): BigInt {
    return this.value2;
  }

  getStatus(): i32 {
    return this.value3;
  }

  getStartAt(): BigInt {
    return this.value4;
  }

  getEndAt(): BigInt {
    return this.value5;
  }
}

export class auctionHouse extends ethereum.SmartContract {
  static bind(address: Address): auctionHouse {
    return new auctionHouse("auctionHouse", address);
  }

  MINBIDINTERVAL(): BigInt {
    let result = super.call("MINBIDINTERVAL", "MINBIDINTERVAL():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MINBIDINTERVAL(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MINBIDINTERVAL",
      "MINBIDINTERVAL():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  assetInGuardian(_guardian: Address, _tokenId: BigInt): boolean {
    let result = super.call(
      "assetInGuardian",
      "assetInGuardian(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_guardian),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return result[0].toBoolean();
  }

  try_assetInGuardian(
    _guardian: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "assetInGuardian",
      "assetInGuardian(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_guardian),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  checkUpkeep(param0: Bytes): auctionHouse__checkUpkeepResult {
    let result = super.call("checkUpkeep", "checkUpkeep(bytes):(bool,bytes)", [
      ethereum.Value.fromBytes(param0)
    ]);

    return new auctionHouse__checkUpkeepResult(
      result[0].toBoolean(),
      result[1].toBytes()
    );
  }

  try_checkUpkeep(
    param0: Bytes
  ): ethereum.CallResult<auctionHouse__checkUpkeepResult> {
    let result = super.tryCall(
      "checkUpkeep",
      "checkUpkeep(bytes):(bool,bytes)",
      [ethereum.Value.fromBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new auctionHouse__checkUpkeepResult(
        value[0].toBoolean(),
        value[1].toBytes()
      )
    );
  }

  guardianStacking(_guardian: Address): BigInt {
    let result = super.call(
      "guardianStacking",
      "guardianStacking(address):(uint256)",
      [ethereum.Value.fromAddress(_guardian)]
    );

    return result[0].toBigInt();
  }

  try_guardianStacking(_guardian: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "guardianStacking",
      "guardianStacking(address):(uint256)",
      [ethereum.Value.fromAddress(_guardian)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isGuardians(_guardian: Address): boolean {
    let result = super.call("isGuardians", "isGuardians(address):(bool)", [
      ethereum.Value.fromAddress(_guardian)
    ]);

    return result[0].toBoolean();
  }

  try_isGuardians(_guardian: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isGuardians", "isGuardians(address):(bool)", [
      ethereum.Value.fromAddress(_guardian)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isListing(tokenId: BigInt): boolean {
    let result = super.call("isListing", "isListing(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toBoolean();
  }

  try_isListing(tokenId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isListing", "isListing(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  s_listings(param0: BigInt): auctionHouse__s_listingsResult {
    let result = super.call(
      "s_listings",
      "s_listings(uint256):(address,uint256,uint256,uint8,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new auctionHouse__s_listingsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toI32(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  try_s_listings(
    param0: BigInt
  ): ethereum.CallResult<auctionHouse__s_listingsResult> {
    let result = super.tryCall(
      "s_listings",
      "s_listings(uint256):(address,uint256,uint256,uint8,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new auctionHouse__s_listingsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toI32(),
        value[4].toBigInt(),
        value[5].toBigInt()
      )
    );
  }

  s_listingsCounter(param0: BigInt): BigInt {
    let result = super.call(
      "s_listingsCounter",
      "s_listingsCounter(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_s_listingsCounter(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "s_listingsCounter",
      "s_listingsCounter(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  s_minStackingValue(): BigInt {
    let result = super.call(
      "s_minStackingValue",
      "s_minStackingValue():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_s_minStackingValue(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "s_minStackingValue",
      "s_minStackingValue():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  s_proceeds(param0: Address): BigInt {
    let result = super.call("s_proceeds", "s_proceeds(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_s_proceeds(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("s_proceeds", "s_proceeds(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _minStackingValue(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddItemsCall extends ethereum.Call {
  get inputs(): AddItemsCall__Inputs {
    return new AddItemsCall__Inputs(this);
  }

  get outputs(): AddItemsCall__Outputs {
    return new AddItemsCall__Outputs(this);
  }
}

export class AddItemsCall__Inputs {
  _call: AddItemsCall;

  constructor(call: AddItemsCall) {
    this._call = call;
  }

  get _guardian(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddItemsCall__Outputs {
  _call: AddItemsCall;

  constructor(call: AddItemsCall) {
    this._call = call;
  }
}

export class ApplyGuardianCall extends ethereum.Call {
  get inputs(): ApplyGuardianCall__Inputs {
    return new ApplyGuardianCall__Inputs(this);
  }

  get outputs(): ApplyGuardianCall__Outputs {
    return new ApplyGuardianCall__Outputs(this);
  }
}

export class ApplyGuardianCall__Inputs {
  _call: ApplyGuardianCall;

  constructor(call: ApplyGuardianCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _location(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ApplyGuardianCall__Outputs {
  _call: ApplyGuardianCall;

  constructor(call: ApplyGuardianCall) {
    this._call = call;
  }
}

export class BidCall extends ethereum.Call {
  get inputs(): BidCall__Inputs {
    return new BidCall__Inputs(this);
  }

  get outputs(): BidCall__Outputs {
    return new BidCall__Outputs(this);
  }
}

export class BidCall__Inputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BidCall__Outputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }
}

export class BreakRefundCall extends ethereum.Call {
  get inputs(): BreakRefundCall__Inputs {
    return new BreakRefundCall__Inputs(this);
  }

  get outputs(): BreakRefundCall__Outputs {
    return new BreakRefundCall__Outputs(this);
  }
}

export class BreakRefundCall__Inputs {
  _call: BreakRefundCall;

  constructor(call: BreakRefundCall) {
    this._call = call;
  }

  get _guardian(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _owner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _refundPrice(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class BreakRefundCall__Outputs {
  _call: BreakRefundCall;

  constructor(call: BreakRefundCall) {
    this._call = call;
  }
}

export class CancelListingCall extends ethereum.Call {
  get inputs(): CancelListingCall__Inputs {
    return new CancelListingCall__Inputs(this);
  }

  get outputs(): CancelListingCall__Outputs {
    return new CancelListingCall__Outputs(this);
  }
}

export class CancelListingCall__Inputs {
  _call: CancelListingCall;

  constructor(call: CancelListingCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelListingCall__Outputs {
  _call: CancelListingCall;

  constructor(call: CancelListingCall) {
    this._call = call;
  }
}

export class ListAssertCall extends ethereum.Call {
  get inputs(): ListAssertCall__Inputs {
    return new ListAssertCall__Inputs(this);
  }

  get outputs(): ListAssertCall__Outputs {
    return new ListAssertCall__Outputs(this);
  }
}

export class ListAssertCall__Inputs {
  _call: ListAssertCall;

  constructor(call: ListAssertCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _guardian(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _startAt(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _endAt(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ListAssertCall__Outputs {
  _call: ListAssertCall;

  constructor(call: ListAssertCall) {
    this._call = call;
  }
}

export class PerformUpkeepCall extends ethereum.Call {
  get inputs(): PerformUpkeepCall__Inputs {
    return new PerformUpkeepCall__Inputs(this);
  }

  get outputs(): PerformUpkeepCall__Outputs {
    return new PerformUpkeepCall__Outputs(this);
  }
}

export class PerformUpkeepCall__Inputs {
  _call: PerformUpkeepCall;

  constructor(call: PerformUpkeepCall) {
    this._call = call;
  }

  get performData(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class PerformUpkeepCall__Outputs {
  _call: PerformUpkeepCall;

  constructor(call: PerformUpkeepCall) {
    this._call = call;
  }
}

export class RedeemAssetCall extends ethereum.Call {
  get inputs(): RedeemAssetCall__Inputs {
    return new RedeemAssetCall__Inputs(this);
  }

  get outputs(): RedeemAssetCall__Outputs {
    return new RedeemAssetCall__Outputs(this);
  }
}

export class RedeemAssetCall__Inputs {
  _call: RedeemAssetCall;

  constructor(call: RedeemAssetCall) {
    this._call = call;
  }

  get _guardian(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RedeemAssetCall__Outputs {
  _call: RedeemAssetCall;

  constructor(call: RedeemAssetCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetAuctionNftCall extends ethereum.Call {
  get inputs(): SetAuctionNftCall__Inputs {
    return new SetAuctionNftCall__Inputs(this);
  }

  get outputs(): SetAuctionNftCall__Outputs {
    return new SetAuctionNftCall__Outputs(this);
  }
}

export class SetAuctionNftCall__Inputs {
  _call: SetAuctionNftCall;

  constructor(call: SetAuctionNftCall) {
    this._call = call;
  }

  get _auctionNftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAuctionNftCall__Outputs {
  _call: SetAuctionNftCall;

  constructor(call: SetAuctionNftCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawGuardianStackingCall extends ethereum.Call {
  get inputs(): WithdrawGuardianStackingCall__Inputs {
    return new WithdrawGuardianStackingCall__Inputs(this);
  }

  get outputs(): WithdrawGuardianStackingCall__Outputs {
    return new WithdrawGuardianStackingCall__Outputs(this);
  }
}

export class WithdrawGuardianStackingCall__Inputs {
  _call: WithdrawGuardianStackingCall;

  constructor(call: WithdrawGuardianStackingCall) {
    this._call = call;
  }
}

export class WithdrawGuardianStackingCall__Outputs {
  _call: WithdrawGuardianStackingCall;

  constructor(call: WithdrawGuardianStackingCall) {
    this._call = call;
  }
}

export class WithdrawProceedsCall extends ethereum.Call {
  get inputs(): WithdrawProceedsCall__Inputs {
    return new WithdrawProceedsCall__Inputs(this);
  }

  get outputs(): WithdrawProceedsCall__Outputs {
    return new WithdrawProceedsCall__Outputs(this);
  }
}

export class WithdrawProceedsCall__Inputs {
  _call: WithdrawProceedsCall;

  constructor(call: WithdrawProceedsCall) {
    this._call = call;
  }
}

export class WithdrawProceedsCall__Outputs {
  _call: WithdrawProceedsCall;

  constructor(call: WithdrawProceedsCall) {
    this._call = call;
  }
}
