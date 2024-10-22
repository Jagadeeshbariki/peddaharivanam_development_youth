import React from 'react';
import styles from './Members.module.css';
import MembersData from '../AboutConfig.json'

const Members = () => {
  return (
    <div className={styles.MembersMainContainer}>
        <h2 id='Members' className={styles.MembersHeading}>Our Gourp Members</h2>
        {/* <div className={`${styles.MembersContainer}`}>
              {
                MembersData[1].Members.map((member, ind)=>{
                  return <div className={`${styles.MemberCard}`} key={ind}>
                    <img className={`${styles.MemberImg} img-thumbnail`} src={member.ImageURL} alt={member.Name} width={100} height={150}/>
                    <p><b><i>Name: {member.Name}</i></b></p>
                    <p><b>Age: </b>{member.Age}</p>
                    <p><b>Qualification:</b>{member.Qualification}</p>
                    <p><b>What Motivate Him to Join Our Group:</b>{member.Motivation}</p>
                  </div>
                })
              }
            </div> */}

            
                {
                    MembersData.map((members, ind)=>{
                        return <div  className={`${styles.MembersContainer}`}>{
                            members.members.map((member,ind)=>{
                                return <div className={`${styles.MemberCard}`} key={ind}>
                                    <img className={`${styles.MemberImg} img-thumbnail`} src={member.ImageURL} alt={member.Name} width={100} height={150}/>
                                    <p><b><i>Name: {member.Name}</i></b></p>
                                    <p><b>Age: </b>{member.Age}</p>
                                    <p><b>Qualification:</b>{member.Qualification}</p>
                                    <p><b>What Motivate Him to Join Our Group:</b>{member.Motivation}</p>
                                </div>
                            })
                            }</div>
                    })
                }
            

    </div>
  )
}

export default Members
