export type LiffApp = {
    liffId?: string,
    view: {
        type: 'compact' | 'tall' | 'full',
        url: string,
        moduleMode?: boolean,
    },
    description?: string,
    features?: {
        ble?: boolean
    },
    permanentLinkPattern?: 'concat' | 'replace',
}