import styled from "styled-components";
import { Buy, OfferItemWrapper, OfferPlant, PlantInfo } from "./styles";
import arrow from '../../../assets/image/yellow-arrow.svg'

const OfferItem = ({ name, preco, img }) => {
    return (
        <OfferItemWrapper>
            <OfferPlant img={img} />
            <PlantInfo>
                <h2>{ name }</h2>
                <p>R$ { preco.toFixed(2) }</p>
                <Buy>
                    <p>Comprar</p>
                    <img src={arrow} alt="Arrow" />
                </Buy>
            </PlantInfo>
        </OfferItemWrapper>
    );
}

export default OfferItem;
