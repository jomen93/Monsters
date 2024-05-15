import React from "react"
import { monsters } from "../assets"

const Hero = () => {
    return (
        <div className="w-full bg-white py-24">
            <div className="max-w-[1480] m-auto grid grid-cols-2">
                <div>
                    <p className="text-2xl text-[#8c52ff] font-medium">Industria Colombiana</p>
                    <h1 className="md:text-7xl text-5xl font-semibold">Una sola infraestructura para la manufactura del calzado en internet</h1>
                    <p className="text-lg text-gray-600">Una sola fuente de calzado para cada necesidad. Desde pares individuales hasta grandes distribuidores, nuestra gama de calzado infantil satisface las demandas de todos los tamaños de pedidos</p>
                    <form className="border border-black p-4">
                        <input 
                            className="bg-white border-black"
                            type="text" 
                            />
                    </form>
                </div>
                <img src={monsters} />
            </div>
        </div>
    )
}

export default Hero