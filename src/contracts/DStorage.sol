pragma solidity ^0.5.0;

contract DStorage {
  string public name = 'DStorage';
  uint public fileCount = 0;
  mapping(uint => File) public files;

  struct File {
    uint fileId;
    string fileHash;
    string fileReceiver;

    string fType;
    string fileIssuer;
    string sUSN;

    string fileDescription;
    uint uploadTime;
    address payable uploader;
  }

  event FileUploaded(
    uint fileId,
    string fileHash,
    string fileReceiver,

    string fType,
    string fileIssuer,
    string sUSN,


    string fileDescription,
    uint uploadTime,
    address payable uploader
  );

  constructor() public {
  }

  function uploadFile(string memory _fileHash, string memory _fileReceiver, string memory _fileDescription, string memory _fType, string memory _fileIssuer, string memory _sUSN) public {
    
    // Increment file id
    fileCount ++;

    // Add File to the contract
    files[fileCount] = File(fileCount, _fileHash, _fileReceiver, _fileDescription, _fType, _fileIssuer, _sUSN, now, msg.sender);
    // Trigger an event
    emit FileUploaded(fileCount, _fileHash, _fileReceiver, _fileDescription, _fType, _fileIssuer, _sUSN, now, msg.sender);
  }
}