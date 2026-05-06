// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {
    address public owner;


    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public hasVoted; // Theo dõi ví đã bầu[cite: 1]
   
    mapping(address => bool) public isWhitelisted; 

    uint public candidatesCount;


    event Voted(uint indexed candidateId, address indexed voter);
    event Whitelisted(address indexed voter);

    modifier onlyOwner() {
        require(msg.sender == owner, "Chi owner moi co the thuc hien");
        _;
    }

   
    constructor() {
        owner = msg.sender;
        addCandidate("An toan web");
        addCandidate("Phan tich ma doc");
        addCandidate("Dich vu dam may");
    }

    function addCandidate(string memory _name) private {
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
        candidatesCount++;
    }

    // Tính năng Admin: Cấp quyền bỏ phiếu cho ví[cite: 1]
    function addToWhitelist(address _address) public onlyOwner {
        require(!isWhitelisted[_address], "Dia chi da nam trong whitelist");
        isWhitelisted[_address] = true;
        emit Whitelisted(_address);
    }

    function vote(uint _candidateId) public {
        
        require(isWhitelisted[msg.sender], "Ban chua duoc cap quyen bo phieu");
        
        
        require(!hasVoted[msg.sender], "Ban da bo phieu roi");
        
        
        require(_candidateId >= 0 && _candidateId < candidatesCount, "ID mon hoc khong hop le");

        
        hasVoted[msg.sender] = true;

        
        candidates[_candidateId].voteCount++;

        
        emit Voted(_candidateId, msg.sender);
    }


    function getAllCandidates() public view returns (Candidate[] memory) {
        Candidate[] memory allCandidates = new Candidate[](candidatesCount);
        for (uint i = 0; i < candidatesCount; i++) {
            allCandidates[i] = candidates[i];
        }
        return allCandidates;
    }
}
