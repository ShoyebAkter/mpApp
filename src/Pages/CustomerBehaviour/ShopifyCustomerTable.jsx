import PropTypes from "prop-types";
const ShopifyCustomerTable = ({data,barName}) => {
    console.log(data)
    const filterData = data[0]?.customers?.filter(item => item.Customer_Segment=== barName);
    console.log(filterData)
  return (
    <div className="overflow-x-auto">
            <table className="table table-sm table-pin-rows table-pin-cols">
                {
                    filterData && <thead>
                    <tr>
                        <td>Name</td>
                        
                        <td>Email</td>
                        <td>Total Order</td>
                        <td>Total Spent</td>
                        <td>Currency</td>
                    </tr>
                </thead>
                }
                <tbody>
                    {filterData?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.first_name + item.last_name}</td>
                            
                            <td>{item.email}</td>
                            <td>{item.orders_count}</td>
                            <td>{item.total_spent}</td>
                            <td>{item.currency}</td>
                            
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </div>
  )
}

export default ShopifyCustomerTable
ShopifyCustomerTable.propTypes = {
    data: PropTypes.array.isRequired,
    barName: PropTypes.string.isRequired,
  };