import {sum}  from "../sum";

test("Sum function should calculate the sum of two functions", () => {
    const result = sum(1, 6);
    //Assertion
    expect(result).toBe(7);
});
