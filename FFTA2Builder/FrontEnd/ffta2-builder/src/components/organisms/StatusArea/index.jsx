import { RankAndGrowth } from "@/components/molecules/RankAndGrowth";

import "./index.css";

export const StatusArea = ({ job }) => {
  return (
    <div className="mt-12 flex flex-col">
      <div className="status-container">
        <span className="stat-title">Move</span>
        <span>{job.move}</span>
      </div>
      <div className="status-container">
        <span className="stat-title">Jump</span>
        <span>{job.jump}</span>
      </div>
      <div className="status-container">
        <span className="stat-title">Unarmed Attack Raise</span>
        <span>{job.unarmedAttackRaise}</span>
      </div>
      <div className="status-container">
        <span className="stat-title">Evasion</span>
        <span>{job.evasion}</span>
      </div>
      <div className="status-container-with-rank">
        <div className="stat-title-black-container">
          <span className="stat-title">HP</span>
        </div>
        <RankAndGrowth rank={job.hp} growth={job.hpGrowth} />
      </div>
      <div className="status-container-with-rank">
        <div className="stat-title-black-container">
          <span className="stat-title">MP</span>
        </div>
        <RankAndGrowth rank={job.mp} growth={job.mpGrowth} />
      </div>
      <div className="status-container-with-rank">
        <div className="stat-title-black-container">
          <span className="stat-title">ATK</span>
        </div>
        <RankAndGrowth rank={job.atk} growth={job.atkGrowth} />
      </div>
      <div className="status-container-with-rank">
        <div className="stat-title-black-container">
          <span className="stat-title">DEF</span>
        </div>
        <RankAndGrowth rank={job.def} growth={job.defGrowth} />
      </div>
      <div className="status-container-with-rank">
        <div className="stat-title-black-container">
          <span className="stat-title">MGK</span>
        </div>
        <RankAndGrowth rank={job.mgk} growth={job.mgkGrowth} />
      </div>
      <div className="status-container-with-rank">
        <div className="stat-title-black-container">
          <span className="stat-title">RES</span>
        </div>
        <RankAndGrowth rank={job.res} growth={job.resistGrowth} />
      </div>
      <div className="status-container-with-rank">
        <div className="stat-title-black-container">
          <span className="stat-title">SPD</span>
        </div>
        <RankAndGrowth
          rank={job.spd}
          hasRank={false}
          growth={job.speedGrowth}
          hasProgress={false}
        />
      </div>
    </div>
  );
};
