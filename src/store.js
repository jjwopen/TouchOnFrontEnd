import {writable} from 'svelte/store';

export let orderInfo = writable({
    menus: [
        {
            id: "testa",
            name: "asdf",
            price: 10000,
            count: 1,
            detail: {
                isSet: true,
                details: [
                    {
                        tag: "음료",
                        id: "testb",
                        name: "콜라(R)",
                        price: 100,
                        count: 1
                    },
                    {
                        tag: "사이드 메뉴",
                        id: "testc",
                        name: "후렌치 후라이(M)",
                        price: 0,
                        count: 1
                    },
                    {
                        tag: "옵션 변경",
                        id: "testd",
                        name: "없음",
                        price: 0,
                        count: 1
                    }
                ]
            }
        }
    ],
    toGo: 0,
    coupon: {
        applied: false,
        discount: 0
    },
    total: 0,
})