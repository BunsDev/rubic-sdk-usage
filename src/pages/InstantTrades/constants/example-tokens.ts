import { BLOCKCHAIN_NAME } from 'rubic-sdk/dist/core/blockchain/models/BLOCKCHAIN_NAME';

type ExampleToken = {
    from: string;
    to: string;
}

export const exampleTokens: Partial<Record<BLOCKCHAIN_NAME, ExampleToken>> = {
    [BLOCKCHAIN_NAME.ETHEREUM]: {
        from: '0x0000000000000000000000000000000000000000',
        to: '0xdac17f958d2ee523a2206206994597c13d831ec7'
    },
    [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: {
        from: '0x0000000000000000000000000000000000000000',
        to: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
    },
    [BLOCKCHAIN_NAME.POLYGON]: {
        from: '0x0000000000000000000000000000000000000000',
        to: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
    },
    [BLOCKCHAIN_NAME.AVALANCHE]: {
        from: '0x0000000000000000000000000000000000000000',
        to: '0xc7198437980c041c805a1edcba50c1ce5db95118'
    },
    [BLOCKCHAIN_NAME.FANTOM]: {
        from: '0x0000000000000000000000000000000000000000',
        to: '0x940f41f0ec9ba1a34cf001cc03347ac092f5f6b5'
    },
    [BLOCKCHAIN_NAME.HARMONY]: {
        from: '0x0000000000000000000000000000000000000000',
        to: '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f'
    },
    [BLOCKCHAIN_NAME.MOONRIVER]: {
        from: '0x0000000000000000000000000000000000000000',
        to: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d'
    }
} as const;
