pragma solidity ^0.5.8;

contract SampleContract {

	
    //
    // Events
    event OwnerChanged(address indexed oldOwner, address indexed newOwner);
    event MapDataSet(address indexed sender, address indexed key, uint256 value);
    event MapDataSetArray(address indexed sender, address[] keys, uint256[] values);
    event StringDataSet(address indexed sender, string value);
    event UintDataSet(address indexed sender, uint256 value);
    event BoolDataSet(address indexed sender, bool value);
    event EtherPaid(address indexed sender, uint256 indexed param, uint256 value);
    event EtherSent(address indexed to, uint256 value);


    //
    // Storage data
    address public owner;
    mapping(address => uint256) public mapData;
    string public stringData;
    uint256 public uintData;
    bool public boolData;


    //
    // Methods
    constructor(uint256 initialData) public {
        owner = msg.sender;
        mapData[owner] = 1;

        stringData = 'Initial';
        uintData = initialData;
    }

    function pureFunction(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }

    function getSomeValues(address key) public view returns (uint256, bool, string memory) {
        return (mapData[key], boolData, stringData);
    }

    function setOwner(address newOwner) public {
        require(msg.sender == owner, 'owner only');
        emit OwnerChanged(owner, newOwner);
        owner = newOwner;
    }

    function setMapData(address key, uint256 value) public {
        mapData[key] = value;
        emit MapDataSet(msg.sender, key, value);
    }

    function setMapDataArray(address[] memory keys, uint256[] memory values) public {
        for(uint256 i = 0; i < values.length; ++i) {
            mapData[keys[i]] = values[i]; 
        }
        emit MapDataSetArray(msg.sender, keys, values);
    }

    function setStringData(string memory value) public {
        stringData = value;
        emit StringDataSet(msg.sender, value);
    }

    function setUintData(uint256 value) public {
        uintData = value;
        emit UintDataSet(msg.sender, value);
    }    

    function setBoolData(bool value) public {
        boolData = value;
        emit BoolDataSet(msg.sender, value);
    }

    function pay(uint256 param) public payable {
        require(msg.value > 10000000000000000, 'too little');
        emit EtherPaid(msg.sender, param, msg.value);
    }

    function withdrawTo(address payable to) public {
        require(owner == msg.sender, 'owner only');
        emit EtherSent(to, address(this).balance);
        to.transfer(address(this).balance);
    }

    function clear() public {
        require(owner==msg.sender, 'owner only');
        mapData[owner] = 1;
        stringData = 'Initial';
        uintData = 5;
    }
}