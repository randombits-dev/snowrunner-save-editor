import React, {useState} from 'react';
import {ProfileData} from "../definitions/ISaveGame";
import styled from "styled-components";
import * as rankings from '../definitions/rank.json';

interface Params {
  profileData: ProfileData;
}

const ProfileContainer = styled.div`
`;

const FieldContainer = styled.div`
  display: flex;
`;

const FieldLabel = styled.div`
  margin-right: 10px;
`;

const FieldInput = styled.input`
  width: 100px;
`;

const ProfileFields = ({profileData}: Params) => {
  const [data, setData] = useState(profileData);

  const onMoneyChange = (e) => {
    profileData.money = Number(e.target.value);
    setData({
      ...profileData
    });
  };

  const onRankChange = (e) => {
    profileData.rank = Number(e.target.value);
    profileData.experience = rankings[e.target.value];
    setData({
      ...profileData
    });
  };

  return (
    <ProfileContainer>
      <h2>Profile</h2>
      <FieldContainer>
        <FieldLabel>Money:</FieldLabel>
        <FieldInput type="number" value={data.money} onChange={onMoneyChange}/>
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>Rank:</FieldLabel>
        <FieldInput type="number" value={data.rank} onChange={onRankChange}/>
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>XP (calculated based on rank):</FieldLabel>
        <div>{data.experience}</div>
      </FieldContainer>
    </ProfileContainer>
  );
}

export default ProfileFields
