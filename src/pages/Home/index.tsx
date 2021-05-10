import styles from './styles.module.scss';
import loldata from '../../assets/data-11.9.1-pt-br.json';
import { ChampionDTO } from '../../dtos/ChampionDTO';
import { useEffect, useState } from 'react';
import { Radar, Chart } from 'react-chartjs-2';

Chart.defaults.color = '#fff'
Chart.defaults.scale.grid.display = true;
Chart.defaults.scale.grid.color = '#4f3a2d';
Chart.defaults.scale.ticks.display = true;
Chart.defaults.scale.ticks.backdropColor = 'none';
Chart.defaults.responsive = true;
Chart.defaults.maintainAspectRatio = false;

export default function Home() {
  const [champions, setChampions] = useState([]);
  const [leftChampion, setLeftChampion] = useState(loldata.data.Ahri);
  const [rightChampion, setRightChampion] = useState(loldata.data.Zed);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const list = Object.keys(loldata.data).map((key: string) => {
      return loldata.data[key];
    });
    setChampions(list);
  }, []);

  useEffect(() => {
    const data = {
      labels: Object.keys(leftChampion.info).map(key => key),
      datasets: [
        {
          label: leftChampion.id,
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: '#b3b5c6',
          pointBackgroundColor: '#b3b5c6',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#b3b5c6',
          data: Object.keys(leftChampion.info).map(key => leftChampion.info[key])
        },
        {
          label: rightChampion.id,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: '#ff6384',
          pointBackgroundColor: '#ff6384',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#ff6384',
          data: Object.keys(rightChampion.info).map(key => rightChampion.info[key])
        }
      ]
    };
    setChartData(data);
  }, [leftChampion, rightChampion]);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.championList}>
          {champions.map((champion: ChampionDTO) => (
            <div className={styles.championSquare} title={champion.id} key={champion.id} onClick={() => setLeftChampion(champion)}>
              <img className={styles.championAvatar} src={`http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/${champion.id}.png`}></img>
            </div>
          ))}
        </div>

        <div className={styles.centerArea}>
          <div className={styles.gridCenter}>
            <div>
              <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${leftChampion.id}_0.jpg`} className={styles.selectedChampionImageLeft}></img>
            </div>
            <div style={{ width: '80%', height: '100%' }}>
              <Radar data={chartData} type='radar' />
            </div>
            <div>
              <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${rightChampion.id}_0.jpg`} className={styles.selectedChampionImageRight}></img>
            </div>
          </div>
        </div>

        <div className={styles.championList}>
          {champions.map((champion: ChampionDTO) => (
            <div className={styles.championSquare} title={champion.id} key={champion.id} onClick={() => setRightChampion(champion)}>
              <img className={styles.championAvatar} src={`http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/${champion.id}.png`}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}