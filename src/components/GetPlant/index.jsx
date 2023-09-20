import { GetPlantImage, GetPlantInfo, GetPlantList, GetPlantWrapper } from "./styles";
import circle from '../../assets/image/yellow-circle.svg';

const GetPlant = () => {
    return (
        <GetPlantWrapper>
            <GetPlantImage>
            </GetPlantImage>
            <GetPlantInfo>
                <p>Como conseguir</p>
                <h3>minha planta</h3>
                <GetPlantList>
                    <li>
                        <img src={circle} alt="" />
                        <span>Escolha suas plantas</span>
                    </li>
                    <li>
                        <img src={circle} alt="" />
                        <span>Faça seu pedido</span>
                    </li>
                    <li>
                        <img src={circle} alt="" />
                        <span>Aguarde na sua casa</span>
                    </li>
                </GetPlantList>
            </GetPlantInfo>
        </GetPlantWrapper>
    );
}

export default GetPlant;
