import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {

    const result =  useCryptoStore((state) => state.result)
    const loading =  useCryptoStore((state) => state.loading)
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])
    
  return (
    <div className="result-wrapper">
        { loading ? (<Spinner />) : hasResult && (
            <>
                <h2>Cotización</h2>
                <div className="result">
                    <img 
                        src={`https://cryptocompare.com/${result.IMAGEURL}`}
                        alt="Imagen Cryptomoneda"
                    />
                    <div className="texto">
                        <p>El precio es de: </p>
                        <p>Precio más alto del día: </p>
                        <p>Precio más bajo del día: </p>
                        <p>Variación últimas 24hs: </p>
                        <p>Última actualización: </p>
                    </div>
                    <div className="price">
                        <p><span>{result.PRICE}</span></p>
                        <p><span>{result.HIGHDAY}</span></p>
                        <p><span>{result.LOWDAY}</span></p>
                        <p><span>{result.CHANGEPCT24HOUR}</span></p>
                        <p><span>{result.LASTUPDATE}</span></p>
                    </div>
                </div>
            </>
        )}        
    </div>
  )
}
