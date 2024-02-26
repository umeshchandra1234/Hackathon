import React, { useState } from 'react';
import './App.css';

const Performance = ({data}) => {
    console.log(data);
    const returnTypes = Object.keys(data);
    const val=['1M', '3M', '6M', '1Y', '2Y', '3Y', '5Y'];
    
  return (
    <div>
    <h2>Results</h2>
    <table class="ui celled table">
        <tr>
            <th>CumulativeReturn</th>
            <th>1M</th>
            <th>3M</th>
            <th>6M</th>
            <th>1Y</th>
            <th>2Y</th>
            <th>3Y</th>
            <th>5Y</th>
        </tr>
        <tr>
            <td>Stock</td>
            {val.map((value) => (
  <td key={value}>{data.cumulativeReturn.stock[value]}</td>
))}
        </tr>
        <tr>
            <td>Benchmark</td>
            {val.map((value) => (
  <td key={value}>{data.cumulativeReturn.benchmark[value]}</td>
))}
        </tr>
        <tr>
            <td>Active_Return</td>
            {val.map((value) => (
  <td key={value}>{data.cumulativeReturn.activeReturn[value]}</td>
))}
        </tr>
        <br ></br>
        <tr>
            <th>AnnualizedReturn</th>
            <th>1M</th>
            <th>3M</th>
            <th>6M</th>
            <th>1Y</th>
            <th>2Y</th>
            <th>3Y</th>
            <th>5Y</th>
        </tr>
        <tr>
            <td>Stock</td>
            {val.map((value) => (
  <td key={value}>{data.cumulativeReturn.stock[value]}</td>
))}
        </tr>
        <tr>
            <td>Benchmark</td>
            {val.map((value) => (
  <td key={value}>{data.cumulativeReturn.benchmark[value]}</td>
))}
        </tr>
        <tr>
            <td>Active_Return</td>
            {val.map((value) => (
  <td key={value}>{data.cumulativeReturn.activeReturn[value]}</td>
))}
        </tr>
    </table>
    </div>
    );
  };
export default Performance;