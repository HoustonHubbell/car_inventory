import React from 'react';
import { useDispatch, useSelector, useStore} from 'react-redux'
import {useForm} from 'react-hook-form';
import {Button} from '@mui/material';
import { chooseName, choosePrice, chooseDescription, chooseVolume, chooseChange, chooseMarketCap, chooseTicker } from '../../redux/slices/rootSlice';
import {Input} from '../sharedComponents';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';


interface CoinFormProps{
    id?:string;
    data?:{};
}

interface CoinState{
    name:string,
    price:string,
    description:string,
    volume:string,
    ticker:string,
    market_cap:string,
    percent_change:string,

}

export const CoinForm = (props:CoinFormProps) => {
    const dispatch = useDispatch();
    let {coinData, getData} = useGetData();
    const store = useStore();

    const name = useSelector<CoinState>(state => state.name)
    const price = useSelector<CoinState>(state => state.price)

    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data.name} \nID: ${props.id}`)
            window.location.reload();
            event.target.reset()
        } else {
            dispatch(chooseName(data.name))
            dispatch(choosePrice(data.price))
            dispatch(chooseTicker(data.ticker))
            dispatch(chooseDescription(data.description))
            dispatch(chooseVolume(data.volume))
            dispatch(chooseMarketCap(data.market_cap))
            dispatch(chooseChange(data.percent_change))

            await serverCalls.create(store.getState())
            window.location.reload();
            event.target.reset();
        }
    }

    return(
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Coin Name</label>
                    <Input {...register('name')} name='name' placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="100.00"/>
                </div>
                <div>
                    <label htmlFor="ticker">Ticker</label>
                    <Input {...register('ticker')} name="ticker" placeholder="ticker"/>
                </div>
                <div>
                    <label htmlFor="volume">Volume</label>
                    <Input {...register('volume')} name="volume" placeholder="volume"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="market_cap">Market Cap</label>
                    <Input {...register('market_cap')} name="market_cap" placeholder="market_cap"/>
                </div>
                <div>
                    <label htmlFor="percent_change">Percent Change</label>
                    <Input {...register('percent_change')} name="percent_change" placeholder="percent_change"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}