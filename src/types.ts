export type TListItem = {
    id: number,
    image: string,
    name: string,
    price: number,
}

export type TState = {
    cart: {
        itemsCount: number,
        items: TListItem[],
    },
    catalog: {
        list: TListItem[],
        itemsCount: number
    }
}

export type TCatalogPayload =  TState["catalog"]["list"]
export type TCartPayload = number
