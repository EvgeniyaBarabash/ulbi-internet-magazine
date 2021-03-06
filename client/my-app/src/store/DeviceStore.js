import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [{ id: 1, name: "Холодильники" },
        { id: 2, name: "Телевизоры" },
        { id: 3, name: "Ноутбуки" },
        ]
        this._brands = [
            { id: 1, name: "Lenovo" },
            { id: 2, name: "Sumsung" },
            { id: 3, name: "Apple" },
            { id: 1, name: "Lenovo" },
            { id: 2, name: "Sumsung" },
            { id: 3, name: "Apple" },
            { id: 1, name: "Lenovo" },
            { id: 2, name: "Sumsung" },
            { id: 3, name: "Apple" },
        ]
        this._devices = [
            { id: 1, name: "Iphone 12 pro", price: 5000, img: '' },
            { id: 2, name: "Iphone 12 pro", price: 5000, img: '' },
            { id: 3, name: "Iphone 12 pro", price: 5000, img: '' },
            { id: 4, name: "Iphone 12 pro", price: 5000, img: '' },
            { id: 5, name: "Iphone 12 pro", price: 5000, img: '' },
            { id: 6, name: "Iphone 12 pro", price: 5000, img: '' },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}