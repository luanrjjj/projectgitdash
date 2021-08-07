import React, {useRef,useState,useEffect} from 'react';
import buildChart from '../../utils/buildChart';
import langColors from '../../utils/langColors';
import ChartsStyles from './styles';
import  theme from '../../styles/theme';
import { isLabeledStatement } from 'typescript';
                   

const { colors, fonts } = theme;


const colorGreen = [
    colors.green100,
    colors.green200,
    colors.green300,
    colors.green400,
    colors.green500,
    colors.green600,
    colors.green700,
    ]         



const Charts = ({langData,repoData}:any)=> {
   
    

    //   Gráfico dos Linguagens Utilizadas  //

    const [langChartData,setLangChartData] = useState(null);
    
    const initLangChart = () => {
        const ctx = document.getElementById ("langChart");
        const labels = langData.map((lang:any)=> lang.label);
        const data = langData.map((lang:any) => lang.value);
        
        
        setLangChartData(data);

        if ( data.length>1) {
            const backgroundColor1 = langData.map(({color}:any) => `#${ color.length > 4? color.slice(1):color.slice(1)}`,
            )                 
            const backgroundColor = colorGreen;                                 
    
            const borderColor = colorGreen;
                
            const chartType = 'pie';
            const axes = false;
            const legend = true;
            const config = {ctx,chartType,labels,data,backgroundColor,borderColor,axes,legend};
            
            buildChart(config)
            
        }
    }

//   Gráfico dos Repositórios mais curtidos  //
    const [starChartData,setStarChartData] = useState(null);


                  
    const initmostStarred = () => {
        const ctx = document.getElementById ("starChart");
        const LIMIT = 5;
        const sortProperty = 'stargazers_count';
        const mostStarredRepos = repoData.filter((repo: { fork: any; })=>!repo.fork).sort((a: { [x: string]: number; },b: { [x: string]: number; })=> b[sortProperty] - a[sortProperty]).slice(0,LIMIT);
        const labels = mostStarredRepos.map((repo:any)=> repo.name);
        const data = mostStarredRepos.map((repo:any) => repo[sortProperty]);        
                                                    
       
        
        setLangChartData(data);

        if ( data.length>1) {
            const backgroundColor = colorGreen
            const borderColor = colorGreen
            const chartType = 'bar';
            const axes = true;
            const legend = false;
            const config = {ctx,chartType,labels,data,backgroundColor,borderColor,axes,legend};
            buildChart(config);
          
            
        }
        
    }

    const [LangStarred,setLangStarred] = useState(null)

                   //   Linguagens mais curtidas nos repositórios  //


    const initLangStarred = () => {
        const ctx = document.getElementById ("langStarChart");
        const LIMIT = 5;
        const sortProperty = 'stargazers_count';
        const filteredRepos = repoData.filter((repo: { fork: any; stargazers_count: number; }) => !repo.fork && repo.stargazers_count>0 )
        
        const uniqueLangs = new Set (filteredRepos.map((repo: { language: any; })=>repo.language))
        
        const labels = Array.from(uniqueLangs.values()).filter(l => l);
        console.log('label',labels)
        const data = labels.map(lang => {
          const repos = filteredRepos.filter((repo: { language: unknown; }) => repo.language === lang);
          const starsArr = repos.map((r: { stargazers_count: any; }) => r.stargazers_count);
          const starSum = starsArr.reduce((a: any, b: any) => a + b, 0);
          return starSum;  
                                                  
        });
        
        setLangStarred(data);

        

        if ( data.length>0) {
            

            const chartType = 'doughnut';
            const axes = false;
            const legend = true;
            const borderColor= (labels).map((label) => langColors.label);
            const backgroundColor = colorGreen;
            const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
            
            buildChart(config);
          
            
        }
        
    }

    useEffect(() => {
        
        if (langData && repoData) {     
          initLangChart();
          initmostStarred();
          initLangStarred();
   
       
        }
      }, []);
    
      
    const chartSize = 300;
    const langChartError = !(langChartData && langChartData.length > 0);
 
    return (
        
        
        <>
            {langData!=null && repoData && (
            <ChartsStyles>
                <div className="GraphsContainer">
                <div className = "chart">
                    <header>
                        <h2>Top Languages</h2>
                    </header>
                    <div className="chart-container">
                    {langChartError && <p>Nothing to see here!</p>}
                    <canvas  id="langChart" width={chartSize} height={chartSize}/>            
          </div>
        </div>
                

        <div className = "chart">
                    <header>
                        <h2>Repositories More Starred</h2>
                    </header>
                    <div className="chart-container">
                    {langChartError && <p>Nothing to see here!</p>}
                    <canvas  id="starChart" width={chartSize} height={chartSize}/>            
          </div>
        </div>

        <div className = "chart">
                    <header>
                        <h2>Starred By Languages</h2>
                    </header>
                    <div className="chart-container">
                    {langChartError && <p>Nothing to see here!</p>}
                    <canvas  id="langStarChart" width={chartSize} height={chartSize}/>            
          </div>
        </div>
        </div>

            </ChartsStyles>
       
        )
        }
         </>
    )


    }
export default Charts;