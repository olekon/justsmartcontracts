pragma solidity ^0.5.8;

contract NoConstructor {
    uint256 public intVar;

    function setIntVar(uint256 newValue) public {
        intVar = newValue;
    }
}