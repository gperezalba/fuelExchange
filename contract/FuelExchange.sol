pragma solidity 0.5.0;

import "./ERC223_receiving_contract.sol";
import "./IERC20.sol";

contract FuelExchange is ERC223ReceivingContract {
    mapping(address => bool) public activeByPart;
    mapping(address => bool) public finishByPart;
    mapping(address => bool) public brokeByPart;
    
    address public partA;
    address public partB;
    bool public active;
    
    IERC20 public tether;
    
    event TetherTransfer(address _to, uint _value);
    
    modifier isPart {
        require((msg.sender == partA) || (msg.sender == partB));
        _;
    }
    
    constructor(address _partA, address _partB, address _tether) public {
        tether = IERC20(_tether);
        partA = _partA;
        partB = _partB;
        active = false;
    }
    
    /// @dev Standard ERC223 function that will handle incoming token transfers
    /// @param _from Token sender address.
    /// @param _value Amount of tokens.
    function tokenFallback(address payable _from, uint _value) public {
        require(msg.sender == address(tether));
        require(active);
    }
    
    function getInfo() public view returns(uint, address, address, bool, bool, bool, bool, bool, bool) {
        return (
            tether.balanceOf(address(this)), 
            partA,
            partB,
            activeByPart[partA], 
            activeByPart[partB], 
            finishByPart[partA], 
            finishByPart[partB], 
            brokeByPart[partA], 
            brokeByPart[partB]
        );
    }
    
    function getTokenBalance(address _who) public view returns (uint) {
        return tether.balanceOf(_who);
    }
    
    function activate() public isPart {
        activeByPart[msg.sender] = true;
        
        if (activeByPart[_getCounterpart(msg.sender)]) {
            active = true;
        }
    }
    
    function transferFrom(uint _value) public isPart {
        tether.transferFrom(partA, address(this), _value);
    }
    
    function finishDeal() public isPart {
        require(active);
        
        finishByPart[msg.sender] = true;
        
        if (finishByPart[_getCounterpart(msg.sender)]) {
            _transfer(partB);
        }
    }
    
    function brokeDeal() public isPart {
        require(active);
        
        brokeByPart[msg.sender] = true;
        
        if (brokeByPart[_getCounterpart(msg.sender)]) {
            _transfer(partA);
        }
    }
    
    function _transfer(address _to) internal {
        require((_to == partA) || (_to == partB));
        
        emit TetherTransfer(_to, tether.balanceOf(address(this)));
        
        tether.transfer(_to, tether.balanceOf(address(this)));
    }
    
    function _getCounterpart(address _part) public view returns(address) {
        address _counterpart;
        
        if (_part == partA) {
            _counterpart = partB;
        } else {
            _counterpart = partA;
        }
        
        return _counterpart;
    }
}