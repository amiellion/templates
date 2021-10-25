import axios from 'axios';
import { axios_config } from './config';
import {useContext} from 'react';

const tableInstance = axios.create({
    ...axios_config
})