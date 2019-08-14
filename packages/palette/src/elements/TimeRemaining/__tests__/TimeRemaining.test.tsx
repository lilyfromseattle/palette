import { mount } from "enzyme"
import { Settings } from "luxon"
import React from "react"
import { Sans } from "../.."
import { TimeRemaining } from "../TimeRemaining"

describe("TimeRemaining", () => {
  const defaultZone = Settings.defaultZoneName
  const realNow = Settings.now

  beforeEach(() => {
    Settings.defaultZoneName = "America/New_York"
  })

  afterEach(() => {
    Settings.now = realNow
    Settings.defaultZoneName = defaultZone
  })

  it("doesn't render hours if end hour is the same as current hour", () => {
    const wrapper = mount(
      <TimeRemaining
        endDate="2019-01-14T15:30:00.000-04:00"
        currentTime="2019-01-05T15:00:30.000-04:00"
        highlight="purple100"
      />
    )
    expect(
      wrapper
        .find(Sans)
        .at(0)
        .html()
    ).toContain("09d&nbsp;&nbsp;00h&nbsp;&nbsp;29m&nbsp;&nbsp;30s")
  })

  it("doesn't render minutes if end hour is the same as current hour", () => {
    const wrapper = mount(
      <TimeRemaining
        endDate="2019-01-14T15:30:30.000-04:00"
        currentTime="2019-01-05T15:30:00.000-04:00"
        highlight="purple100"
      />
    )
    expect(
      wrapper
        .find(Sans)
        .at(0)
        .html()
    ).toContain("09d&nbsp;&nbsp;00h&nbsp;&nbsp;00m&nbsp;&nbsp;30s")
  })

  it("renders timeEndedDisplayText when time has ended if passed", () => {
    const wrapper = mount(
      <TimeRemaining
        endDate="2018-01-14T15:30:30.000-04:00"
        highlight="purple100"
        currentTime="2019-01-05T15:30:00.000-04:00"
        timeEndedDisplayText="0 days left"
      />
    )

    expect(
      wrapper
        .find(Sans)
        .at(0)
        .html()
    ).toContain("0 days left")
  })

  it("renders trailing text if provided", () => {
    const wrapper = mount(
      <TimeRemaining
        endDate="2019-01-14T15:30:30.000-04:00"
        highlight="purple100"
        currentTime="2019-01-05T15:30:00.000-04:00"
        trailingText="left"
      />
    )
    expect(
      wrapper
        .find(Sans)
        .at(0)
        .html()
    ).toContain("09d&nbsp;&nbsp;00h&nbsp;&nbsp;00m&nbsp;&nbsp;30s left")
  })
})
