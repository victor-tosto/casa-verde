import { useEffect, useState } from "react";
import OfferItem from "./OfferItem";
import { Filter, OffersSubtitle, OffersWrapper } from "./styles";

const Offers = () => {

    const [plantsList, setPlantsList] = useState([]);
    const [originalPlantsList, setOriginalPlantsList] = useState([]);
    const [sortItem, setSortItem] = useState('default');
    const [filterByPrice, setFilterByPrice] = useState('default');

    const url = 'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsmi=231361624&_hsenc=p2ANqtz-8rpkWdZJGpP6CXww0LySWqPKD42dOWVCxYfcNF4SmjcDF3z2iSPaBk4704B-FmggVPvFgUAVHaPMHpt09-afjDPNMpwytw2jl4XDNGoVP87oYUL60&utm_content=231361624&utm_source=hs_automation';

    useEffect(() => {
        async function getPlantsData(url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPlantsList(data);
                setOriginalPlantsList(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }
        getPlantsData(url);
    }, []);
    
    useEffect(() => {
        const sortList = (value) => {
            const sortedList = [...plantsList];
            if (value === 'desc') {
                sortedList.sort((a, b) => a.preco - b.preco);
            } else if (value === 'asc') {
                sortedList.sort((a, b) => b.preco - a.preco);
            } else if (value === 'A - Z') {
                sortedList.sort((a, b) => a.name.localeCompare(b.name));
            }
            setPlantsList(sortedList);
        }

        sortList(sortItem);
    }, [sortItem, plantsList]);

    useEffect(() => {
        const filterList = (value) => {
            const filteredList = originalPlantsList.filter(item => {
                if (value === 'default') return true;
                const [min, max] = value.split(' - ');
                const preco = parseFloat(item.preco);
                return preco >= parseFloat(min) && preco <= parseFloat(max);
            });
            setPlantsList(filteredList);
        }

        filterList(filterByPrice);
    }, [filterByPrice, originalPlantsList]);

    return (
        <OffersWrapper>
            <p>Conheça nossas</p>
            <OffersSubtitle>plantas</OffersSubtitle>
            <Filter>
                <select name="" id="" value={sortItem} onChange={(e) => setSortItem(e.target.value)}>
                    <option value="default">Ordenar por preço ou nome</option>
                    <option value="desc">Menor preço</option>
                    <option value="asc">Maior preço</option>
                    <option value="A - Z">A - Z</option>
                </select>
                <select name="" id="" value={filterByPrice} onChange={(e) => setFilterByPrice(e.target.value)}>
                    <option value="default">Filtrar por preço</option>
                    <option value="10 - 20">R$ 10,00 - R$ 20,00</option>
                    <option value="20 - 30">R$ 20,00 - R$ 30,00</option>
                    <option value="30 - 40">R$ 30,00 - R$ 40,00</option>
                </select>
            </Filter>
            <ul>
                { plantsList.map(item => item.ordem > 0 && <OfferItem key={item.name} {...item} />) }
            </ul>
        </OffersWrapper>
    );
}

export default Offers;
