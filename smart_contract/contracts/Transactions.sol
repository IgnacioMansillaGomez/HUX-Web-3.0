//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions{
  uint256 transactionsCounter;

  event Transfer(address from,address reciever,uint amount,string message,uint256 timestamp,string keyword);

  struct TransferStruct{
    address sender;
    address reciever;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;
  }

  TransferStruct[] transactions;

  function addToBlockchain() public {

  }

  function getAllTransactions() public view returns(TransferStruct[] memory){
    // to do
  }

  function geTransactionCount() public view returns (uint256){
    // return transactionsCounter;
  }



}