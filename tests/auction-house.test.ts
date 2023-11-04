import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AssertListed } from "../generated/schema_test"
import { AssertListed as AssertListedEvent } from "../generated/auctionHouse/auctionHouse"
import { handleAssertListed } from "../src/auction-house"
import { createAssertListedEvent } from "./auction-house-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let seller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenId = BigInt.fromI32(234)
    let guardian = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAssertListedEvent = createAssertListedEvent(
      seller,
      tokenId,
      guardian
    )
    handleAssertListed(newAssertListedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AssertListed created and stored", () => {
    assert.entityCount("AssertListed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AssertListed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "seller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AssertListed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "AssertListed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "guardian",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
