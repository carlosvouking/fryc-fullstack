const hre = require("hardhat");

const main = async() => {
    // deploying the contract transaction.sol
    const transaction = hre.ethers.getContractFactory("Transactions");

}


const executeMain = async() => {
    try {
        await main(); // execute and deploy the transaction contract by calling the main()
        process.exit(0); // 0 ie l'execution du déploiement s'est bien déroulé
    } catch (error) {
        console.error(error);
        process.exit(1); // il y'a eu un problèe lors du déploiement du contract dans le main()
    }
}


executeMain();