import React from 'react';


const ContainerWrapper = <P extends object>(Component: React.ComponentType<P>): React.ComponentType<P> => {

    return (props) => (
        <div className="container-fluid">
            <Component {...props}>


            </Component>
        </div>
    )
}

export default ContainerWrapper;