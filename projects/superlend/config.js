module.exports = {
    "POOL": "0xb12Ec57a854C2D6beE878ac803d84624f525226A",
    "ABI" : {
        getReservesList : "function getReservesList() external view returns(address[] memory)",
        getReserveData : "function getReserveData(address asset) view returns (tuple(tuple(uint256 data) configuration, uint128 liquidityIndex, uint128 currentLiquidityRate,  uint128 variableBorrowIndex, uint128 currentVariableBorrowRate, uint128 currentStableBorrowRate, uint40 lastUpdateTimestamp, uint16 id, address aTokenAddress, address stableDebtTokenAddress, address variableDebtTokenAddress, address interestRateStrategyAddress, uint128 accruedToTreasury, uint128 unbacked, uint128 isolationModeTotalDebt))",
        underlyingAsset : "function UNDERLYING_ASSET_ADDRESS() view returns (address)",
        balanceOf : "function balanceOf(address account) external view returns (uint256)"
    }
}
