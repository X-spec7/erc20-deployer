// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CustomToken is ERC20 {
    uint8 private _customDecimals;

    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_,
        uint256 initialSupply
    ) ERC20(name_, symbol_) {
        _customDecimals = decimals_;

        // Mint initial supply to deployer
        _mint(msg.sender, initialSupply * (10 ** decimals_));
    }

    // Override decimals
    function decimals() public view override returns (uint8) {
        return _customDecimals;
    }
}
