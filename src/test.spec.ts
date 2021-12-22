import { last } from "lodash";

test("should get last", () => {
    const array = ["first", "second"]

    const result = last(array);

    expect(result).toBe("second")
})
