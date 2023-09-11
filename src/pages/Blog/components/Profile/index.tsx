import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProfileContainer, ProfileDetails, ProfileImg } from "./styles"
import { useCallback, useEffect, useState } from "react"
import { api } from "../../../../lib/axios"
import { Spinner } from "../../../../components/spinner"
import { HomeContainer } from "../../styles"

interface ProfileData {
    login: string;
    bio: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company?: string;
    followers: number;
}

export function Profile() {

    const[profileData, setProfileData] = useState<ProfileData>(
        {} as ProfileData
    );
    const[isLoading, setIsLoading] = useState(true);

    const getProfileData = useCallback(async () => {
        try {
          setIsLoading(true);
          const response = await api.get(`/users/rodrigolauande`);
    
          setProfileData(response.data);
        } finally {
          setIsLoading(false);
        }
      }, [profileData]);

    useEffect(() => {
        getProfileData();
      }, []);

        
      if (isLoading) {
            <ProfileContainer>
            <HomeContainer>
                <Spinner/>
            </HomeContainer>
        </ProfileContainer>
    } else {
        return(
            <ProfileContainer>
                <ProfileImg src={profileData.avatar_url} alt="" />
                    <ProfileDetails>
                        <header>
                            <h1>{profileData.name}</h1>
                            <a href={profileData.html_url}>GITHUB<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                        </header>
                        <p>
                        {profileData.bio}
                        </p>
                        <ul>
                            <li><FontAwesomeIcon icon={faGithub}/>{profileData.login}</li>
                            {profileData?.company && (
                            <li><FontAwesomeIcon icon={faBuilding}/>{profileData.company}</li>
                            )}
                            <li><FontAwesomeIcon icon={faUserGroup}/>{profileData.followers}</li>
                        </ul>
                    </ProfileDetails>
            </ProfileContainer>
        )   
    }
}