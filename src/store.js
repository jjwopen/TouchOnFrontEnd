import {writable} from 'svelte/store';

export const INITIALORDERINFO = {
    menus: [],
    toGo: 0,
    coupon: {
        applied: false,
        discount: 0
    },
    total: 0,
};

/**
 * @typedef {Object} OrderDetailItem
 * @property {string} tag
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {number} count
 */

/**
 * @typedef {Object} MenuDetail
 * @property {boolean} isSet
 * @property {OrderDetailItem[]} details
 */

/**
 * @typedef {Object} MenuItem
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {number} count
 * @property {MenuDetail} detail
 */

/**
 * @typedef {Object} OrderCoupon
 * @property {boolean} applied - 쿠폰 적용 여부
 * @property {number} discount - 쿠폰 할인 금액
 */

/**
 * @typedef {Object} OrderInfo
 * @property {MenuItem[]} menus - 주문된 메뉴들의 배열
 * @property {number} toGo - 0: 매장, 1: 포장
 * @property {OrderCoupon} coupon - 적용된 쿠폰 정보
 * @property {number} total - 최종 결제 금액
 */

/** @type {import('svelte/store').Writable<OrderInfo>} */
export let orderInfo = writable(INITIALORDERINFO);



// export let orderInfo = writable({
//     menus: [
//         {
//             id: "testa",
//             name: "asdf",
//             price: 10000,
//             count: 1,
//             detail: {
//                 isSet: true,
//                 details: [
//                     {
//                         tag: "음료",
//                         id: "testb",
//                         name: "콜라(R)",
//                         price: 100,
//                         count: 1
//                     },
//                     {
//                         tag: "사이드 메뉴",
//                         id: "testc",
//                         name: "후렌치 후라이(M)",
//                         price: 0,
//                         count: 1
//                     },
//                 ]
//             }
//         }
//
//     ],
//     toGo: 0,
//     coupon: {
//         applied: false,
//         discount: 0
//     },
//     total: 0,
// })

/**
 * @typedef {Object} Coupon
 * @property {string} code
 * @property {string} name
 * @property {string} appliable
 * @property {'percentage' | 'price' | string} type
 * @property {number} value
 * @property {boolean} applied
 * @property {string} appliedTarget
 */

/** @type {import('svelte/store').Writable<Coupon[]>} */
export let coupons = writable([
    {
        code: "def",
        name: "1,000원 쿠폰",
        appliable: "all",
        type: "price",
        value: 1000,
        applied: false,
        appliedTarget: ""
    },
    {
        code: "abc",
        name: "2,000원 쿠폰",
        appliable: "all",
        type: "price",
        value: 2000,
        applied: false,
        appliedTarget: ""
    },
])

export let shortScreen = writable(true);


// orderInfo를 INITIALORDERINFO로 초기화하는 함수
export function resetOrderInfoToInitial() {
    orderInfo.set(INITIALORDERINFO);
}

// 모든 쿠폰의 applied 값을 false로 설정하는 함수
export function resetAllCouponApplications() {
    coupons.update(currentCoupons => {
        return currentCoupons.map(coupon => ({
            ...coupon,
            applied: false
        }));
    });
}