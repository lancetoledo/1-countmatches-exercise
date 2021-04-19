const expect = chai.expect,
  testitems = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"]
  ],
  testruleKey = "color",
  testruleValue = "silver";

describe("CountMatches", () => {
  it("Return the number of items that match the given rule.", () => {
    expect(countMatches(testitems, testruleKey, testruleValue)).to.equal(
      1,
      "Please check your function!"
    );
  });
});
