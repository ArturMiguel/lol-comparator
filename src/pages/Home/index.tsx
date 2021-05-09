import styles from './styles.module.scss';
import loldata from '../../assets/data-11.9.1-pt-br.json';
import { ChampionDTO } from '../../dtos/ChampionDTO';
import { useEffect, useState } from 'react';

export default function Home() {
  const [champions, setChampions] = useState([]);
  const [leftChampion, setLeftChampion] = useState(loldata.data.Ahri);
  const [rightChampion, setRightChampion] = useState(loldata.data.Zed);

  useEffect(() => {
    const list = Object.keys(loldata.data).map((key: string) => {
      return loldata.data[key];
    });
    setChampions(list);
  }, []);

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
              <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${leftChampion.id}_0.jpg`} className={styles.selectedChampionImage}></img>
            </div>
            <div>
              ...
            </div>
            <div>
              <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${rightChampion.id}_0.jpg`} className={styles.selectedChampionImage}></img>
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