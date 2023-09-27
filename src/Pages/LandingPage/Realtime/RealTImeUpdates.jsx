import './Realtime.css'
export const RealTImeUpdates = () => {
    return (
        <div className=' background overflow-hidden'>
            <main className="db">
                <div className="db__toolbar">
                    <h1 className="text-3xl font-bold text-green-600">Real-Time Updates</h1>

                </div>
                <div className="db__cell">
                    <h2 className="db__top-stat">Today’s Revenue</h2>
                    <div className="db__progress">
                        <div className="db__progress-fill" style={{ "transform": "translateX(15%)" }}></div>
                    </div>
                    <div className="db__counter">
                        <div className="db__counter-value" title="$3,330,050.90">$3.33M</div>
                        <div className="db__counter-label">
                            <strong>+15%</strong><small>vs yesterday</small>
                        </div>
                    </div>
                </div>
                <div className="db__cell">
                    <h2 className="db__top-stat">Today’s Orders</h2>
                    <div className="db__progress">
                        <div className="db__progress-fill" style={{ "transform": "translateX(20%)" }}></div>
                    </div>
                    <div className="db__counter">
                        <div className="db__counter-value">7,410</div>
                        <div className="db__counter-label">
                            <strong>+20%</strong><small>vs yesterday</small>
                        </div>
                    </div>
                </div>
                <div className="db__cell">
                    <h2 className="db__top-stat">Avg. Order Value</h2>
                    <div className="db__progress">
                        <div className="db__progress-fill" style={{ "transform": "translateX(42%)" }}></div>
                    </div>
                    <div className="db__counter">
                        <div className="db__counter-value">$449.40</div>
                        <div className="db__counter-label">
                            <strong>+42%</strong><small>vs yesterday</small>
                        </div>
                    </div>
                </div>
                <div className="db__cell">
                    <h2 className="db__subheading">Sales in Last 7 Days</h2>
                    <div className="db__bars">
                        <div className="db__bars-cell">
                            <div className="db__bars-cell-bar" title="$4,610,555.90">
                                <div className="db__bars-cell-bar-fill" style={{ "transform": "translateY(-92.2%)" }}></div>
                            </div>
                        </div>
                        <div className="db__bars-cell">
                            <div className="db__bars-cell-bar" title="$3,612,857.76">
                                <div className="db__bars-cell-bar-fill" style={{ "transform": "translateY(-72.3%)" }}></div>
                            </div>
                        </div>
                        <div className="db__bars-cell">
                            <div className="db__bars-cell-bar" title="$2,137,371.54">
                                <div className="db__bars-cell-bar-fill" style={{ "transform": "translateY(-42.7%)" }}></div>
                            </div>
                        </div>
                        <div className="db__bars-cell">
                            <div className="db__bars-cell-bar" title="$4,856,109.94">
                                <div className="db__bars-cell-bar-fill" style={{ "transform": "translateY(-97.1%)" }}></div>
                            </div>
                        </div>
                        <div className="db__bars-cell">
                            <div className="db__bars-cell-bar" title="$3,662,766.81">
                                <div className="db__bars-cell-bar-fill" style={{ "transform": "translateY(-73.3%)" }}></div>
                            </div>
                        </div>
                        <div className="db__bars-cell">
                            <div className="db__bars-cell-bar" title="$2,895,150.25">
                                <div className="db__bars-cell-bar-fill" style={{ "transform": "translateY(-57.9%)" }}></div>
                            </div>
                        </div>
                        <div className="db__bars-cell">
                            <div className="db__bars-cell-bar" title="$3,330,050.90">
                                <div className="db__bars-cell-bar-fill" style={{ "transform": "translateY(-66.6%)" }}></div>
                            </div>
                        </div>
                        <div className="db__bars-cell">$5M</div>
                        <div className="db__bars-cell">$4M</div>
                        <div className="db__bars-cell">$3M</div>
                        <div className="db__bars-cell">$2M</div>
                        <div className="db__bars-cell">$1M</div>
                        <div className="db__bars-cell"></div>
                        <div className="db__bars-cell">
                            <time dateTime="2022-05-01">5/1</time>
                        </div>
                        <div className="db__bars-cell">
                            <time dateTime="2022-05-02">5/2</time>
                        </div>
                        <div className="db__bars-cell">
                            <time dateTime="2022-05-03">5/3</time>
                        </div>
                        <div className="db__bars-cell">
                            <time dateTime="2022-05-04">5/4</time>
                        </div>
                        <div className="db__bars-cell">
                            <time dateTime="2022-05-05">5/5</time>
                        </div>
                        <div className="db__bars-cell">
                            <time dateTime="2022-05-06">5/6</time>
                        </div>
                        <div className="db__bars-cell">
                            <time dateTime="2022-05-07">5/7</time>
                        </div>
                    </div>
                </div>
                <div className="db__cell">
                    <h2 className="db__subheading">Best Selling Products</h2>
                    <table className="db__product-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Orders</th>
                                <th>Status</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="db__product">
                                        <div className="db__product-details">
                                            <div className="db__product-detail-line">iPhone 13</div>
                                            <div className="db__product-detail-line">
                                                <small>2,710 Orders</small>
                                            </div>
                                            <div className="db__status db__status--green">In Stock</div>
                                        </div>
                                        <div className="db__product-details">
                                            <strong>$599.99</strong>
                                        </div>
                                    </div>
                                </td>
                                <td>iPhone 13</td>
                                <td>2,710</td>
                                <td className="db__status db__status--green">In Stock</td>
                                <td><strong>$599.99</strong></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="db__product">
                                        <div className="db__product-details">
                                            <div className="db__product-detail-line">Macbook Air 2022</div>
                                            <div className="db__product-detail-line">
                                                <small>1,066 Orders</small>
                                            </div>
                                            <div className="db__status db__status--red">Out of Stock</div>
                                        </div>
                                        <div className="db__product-details">
                                            <strong>$1199.99</strong>
                                        </div>
                                    </div>
                                </td>
                                <td>Macbook Air 2022</td>
                                <td>1,066</td>
                                <td className="db__status db__status--red">Out of Stock</td>
                                <td><strong>$1199.99</strong></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="db__product">
                                        <div className="db__product-details">
                                            <div className="db__product-detail-line">Denim #142 Light Blue</div>
                                            <div className="db__product-detail-line">
                                                <small>102 Orders</small>
                                            </div>
                                            <div className="db__status db__status--orange">Low In Stock</div>
                                        </div>
                                        <div className="db__product-details">
                                            <strong>$44.99</strong>
                                        </div>
                                    </div>
                                </td>
                                <td>Denim #142 Light Blue</td>
                                <td>327</td>
                                <td className="db__status db__status--orange">Low In Stock</td>
                                <td><strong>$44.99</strong></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="db__product">
                                        <div className="db__product-details">
                                            <div className="db__product-detail-line">iPad Air 5</div>
                                            <div className="db__product-detail-line">
                                                <small>303 Orders</small>
                                            </div>
                                            <div className="db__status db__status--green">In Stock</div>
                                        </div>
                                        <div className="db__product-details">
                                            <strong>$549.99</strong>
                                        </div>
                                    </div>
                                </td>
                                <td>iPad Air 5</td>
                                <td>303</td>
                                <td className="db__status db__status--green">In Stock</td>
                                <td><strong>$549.99</strong></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="db__product">
                                        <div className="db__product-details">
                                            <div className="db__product-detail-line">iMac 2022</div>
                                            <div className="db__product-detail-line">
                                                <small>104 Orders</small>
                                            </div>
                                            <div className="db__status db__status--green">In Stock</div>
                                        </div>
                                        <div className="db__product-details">
                                            <strong>$1,699.99</strong>
                                        </div>
                                    </div>
                                </td>
                                <td>iMac 2022</td>
                                <td>104</td>
                                <td className="db__status db__status--green">In Stock</td>
                                <td><strong>$1,699.99</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="db__cell">
                    <h2 className="db__subheading">Top Selling Categories</h2>
                    <div className="db__bubbles">
                        <div className="db__bubble">
                            <span className="db__bubble-text">
                                Electronic<strong className="db__bubble-value">4,183</strong>per day
                            </span>
                        </div>
                        <div className="db__bubble">
                            <span className="db__bubble-text">
                                Fashion<strong className="db__bubble-value">2,215</strong>per day
                            </span>
                        </div>
                        <div className="db__bubble">
                            <span className="db__bubble-text">
                                Books<strong className="db__bubble-value">1,012</strong>per day
                            </span>
                        </div>
                    </div>
                </div>
                <div className="db__cell">
                    <h2 className="db__subheading">Recent Orders</h2>
                    <div className="db__order">
                        <div className="db__order-cat">
                            <svg className="db__order-cat-icon" width="24px" height="24px" aria-hidden="true">
                                <use href="#smartphone" />
                            </svg>
                        </div>
                        <div className="db__order-name">
                            iPhone 13<br />
                            <small>
                                <time dateTime="2022-05-07 18:49:00">May 7 at 6:49 PM</time>
                            </small>
                        </div>
                        <div><strong>$599.99</strong></div>
                    </div>
                    <div className="db__order">
                        <div className="db__order-cat">
                            <svg className="db__order-cat-icon" width="24px" height="24px" aria-hidden="true">
                                <use href="#laptop" />
                            </svg>
                        </div>
                        <div className="db__order-name">
                            Macbook Air 2022
                            <small>
                                <time dateTime="2022-05-07 18:49:00">May 7 at 6:49 PM</time>
                            </small>
                        </div>
                        <div><strong>$1199.99</strong></div>
                    </div>
                    <div className="db__order">
                        <div className="db__order-cat">
                            <svg className="db__order-cat-icon" width="24px" height="24px" aria-hidden="true">
                                <use href="#monitor" />
                            </svg>
                        </div>
                        <div className="db__order-name">
                            iMac 2022
                            <small>
                                <time dateTime="2022-05-07 18:49:00">May 7 at 6:49 PM</time>
                            </small>
                        </div>
                        <div><strong>$1,699.99</strong></div>
                    </div>
                    <div className="db__order">
                        <div className="db__order-cat">
                            <svg className="db__order-cat-icon" width="24px" height="24px" aria-hidden="true">
                                <use href="#tablet" />
                            </svg>
                        </div>
                        <div className="db__order-name">
                            iPad Air 5
                            <small>
                                <time dateTime="2022-05-07 18:49:00">May 7 at 6:49 PM</time>
                            </small>
                        </div>
                        <div><strong>$549.99</strong></div>
                    </div>
                    <div className="db__order">
                        <div className="db__order-cat">
                            <svg className="db__order-cat-icon" width="24px" height="24px" aria-hidden="true">
                                <use href="#hat" />
                            </svg>
                        </div>
                        <div className="db__order-name">
                            Fedora Hat
                            <small>
                                <time dateTime="2022-05-07 18:49:00">May 7 at 6:49 PM</time>
                            </small>
                        </div>
                        <div><strong>$224.99</strong></div>
                    </div>
                </div>
            </main>

        </div>
    )
}
