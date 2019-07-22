import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import AppNav from '../components/shared/Nav.vue'
import store from "../store/store"

const DiscountPr = resolve => {
    require.ensure(['../components/DiscountProducts/DiscountProducts'], () => {
        resolve(require('../components/DiscountProducts/DiscountProducts'))
    })
}

const FavProduct = resolve => {
    require.ensure(['../components/FavoriteProduct/FavoriteProduct'], () => {
        resolve(require('../components/FavoriteProduct/FavoriteProduct'))
    })
}

const SharedProduct = resolve => {
    require.ensure(['../components/SharedProduct/SharedProduct'], () => {
        resolve(require('../components/SharedProduct/SharedProduct'))
    })
}
const ProductDetail = resolve => {
    require.ensure(['../components/Product/ProductDetail'], () => {
        resolve(require('../components/Product/ProductDetail'))
    })
}
const EditPr = resolve => {
    require.ensure(['../components/Product/EditProduct'], () => {
        resolve(require('../components/Product/EditProduct'))
    })
}

const Product = resolve => {
    require.ensure(['../components/Product/Product'], () => {
        resolve(require('../components/Product/Product'))
    })
}
const CreateNewProduct = resolve => {
    require.ensure(['../components/CreateNewProduct/CreateNewProduct'], () => {
        resolve(require('../components/CreateNewProduct/CreateNewProduct'))
    })
}
const CreateNewAnnouncement = resolve => {
        require.ensure(['../components/CreateNewAnnouncement/CreateNewAnnouncement'], () => {
            resolve(require('../components/CreateNewAnnouncement/CreateNewAnnouncement'))
        })
    }
    // const SharedAnnouncement = resolve => {
    //     require.ensure(['./components/SharedAnnouncement/SharedAnnouncement'], () => {
    //         resolve(require('./components/SharedAnnouncement/SharedAnnouncement'))
    //     })
    // }
const productrouters = {
    routes: {
        products: {
            path: "/Products",
            name: "Product",
            components: {
                default: Product,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                next()
            }
        },
        productdetail: {
            path: "/ProductDetail/:prid",
            name: "PrDetail",
            components: {
                default: ProductDetail,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                next()
            }
        },
        favproduct: {
            path: "/FavProduct",
            name: "Favorite",
            components: {
                default: FavProduct,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                store.dispatch("initAuth").then((res) => {
                    if (res == true) {
                        next();
                    } else {
                        next("/Login")
                    }
                })

            }

        },
        newproduct: {
            path: "/CreateProduct",
            name: "CreateNewProduct",
            components: {
                default: CreateNewProduct,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                store.dispatch("initAuth").then((res) => {
                    if (res == true) {
                        next();
                    } else {
                        next("/Login")
                    }
                })

            }
        },
        newannouncement: {
            path: "/CreateNewAnnouncement",
            name: "NewAnnouncement",
            components: {
                default: CreateNewAnnouncement,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                store.dispatch("initAuth").then((res) => {
                    if (res == true) {
                        next();
                    } else {
                        next("/Login")
                    }
                })

            }
        },
        discountpr: {
            path: "/DiscountProducts",
            name: "Discount",
            components: {
                default: DiscountPr,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                next()
            }
        },
        sharedproduct: {
            path: "/Shared",
            name: "Share",
            components: {
                default: SharedProduct,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                store.dispatch("initAuth").then((res) => {
                    if (res == true) {

                        next();
                    } else {
                        next("/Login")
                    }
                })

            }
        },
        editproduct: {
            path: "/EditProduct/:prid",
            name: "EditPr",
            components: {
                default: EditPr,
                "appheader": Header,
                "appnav": AppNav,
                "appfooter": Footer
            },
            beforeEnter(to, from, next) {
                store.commit("setpopupstyle", "none")
                store.dispatch("initAuth").then((res) => {
                    if (res == true) {
                        store.commit("setpopupstyle", "none")
                        next();
                    } else {
                        next("/Login")
                    }
                })

            }
        },
        //sharedannouncement:
        // {
        //     path: "/SharedAnnouncement",
        //     name: "ShareAnnouncement",
        //     components: {
        //         default: SharedAnnouncement,
        //         "appheader": Header,
        //         "appnav": AppNav,
        //         "appfooter": Footer
        //     },
        //     beforeEnter(to, from, next) {
        //         store.dispatch("initAuth").then((res) => {
        //             if (res == true) {
        //                 next();
        //             } else {
        //                 next("/Login")
        //             }
        //         })

        //     }
        // },
    }
}
export default productrouters