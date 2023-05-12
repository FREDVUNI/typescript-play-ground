import React,{ useState,createContext } from 'react';

type Props = {
    children:React.ReactNode;
}

export const ProductsContext = createContext();

export const ProductProvider = ({ children }: Props) =>{
    const [products,setProducts] = useState<any>(null)
    return(
        <ProductsContext.Provider value={{ products,setProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

// use the ProductProvider in index.ts or main.ts