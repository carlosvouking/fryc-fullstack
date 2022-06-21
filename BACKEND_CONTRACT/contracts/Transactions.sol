// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
    constructor() {}

    uint256 txCounter;

    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    // propriétés que chaque tranfert doit avoir.
    struct transferStruct {
        address sender;
        address reciever;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    transferStruct[] public transactions;

    // effectue un transfer et l'ajouter à la chaîne de blocks.
    function addToBlockchain(
        address payable _receiver,
        uint256 _amount,
        string memory _message,
        string memory _keyword
    ) public {
        // il faut incrémenter le nombre de transactions chaque fois qu'on ajout une nouvelle transaction....le tranfert de fryck n'est pas encore fait.
        txCounter = txCounter + 1;
        transactions.push(
            transferStruct(
                msg.sender,
                _receiver,
                _amount,
                _message,
                block.timestamp,
                _keyword
            )
        );

        // le transfert se fait ici...
        emit Transfer(
            msg.sender,
            _receiver,
            _amount,
            _message,
            block.timestamp,
            _keyword
        );
    }

    // aidera à présenter toutes les transactions éffectuées et stockées en mémoire
    function getAllTransactions()
        public
        view
        returns (transferStruct[] memory)
    {
        return transactions;
    }

    // capable de lire le nombre de transactions déja effectuées
    function getTransactionCount() public view returns (uint256) {
        return txCounter;
    }
}
