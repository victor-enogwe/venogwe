import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from '@/styles/campaign-list.module.scss';

export interface Campaign {
  campaignId: number;
  campaignName: string;
}

export interface Campaigns {
  [key: string]: Campaign;
}

export interface User {
  userId: number;
  userName: string;
  campaigns: number[];
}

export const listUsers = async (
  token: number,
  pageSize: number,
): Promise<User[]> =>
  Promise.resolve(
    [...Array(pageSize).keys()].map((ix) => {
      const userId = token + ix + 1;
      const userName = `user name ${userId.toString()}`;
      const campaigns = [];
      for (let i = 0; i < 3; i += 1) {
        const campaignId = Math.floor(Math.random() * 100);
        campaigns.push(campaignId);
      }
      return { userId, userName, campaigns };
    }),
  );

export const getCampaigns = async (
  campaignIds: number[],
): Promise<Campaign[]> =>
  Promise.resolve(
    campaignIds.map((id) => ({
      campaignId: id,
      campaignName: `campaign ${id}`,
    })),
  );

function paginate(token: number) {
  return listUsers(token, 10);
}

export default function CampaignList() {
  const [users, setUsers] = useState<User[]>([]);
  const [nextPage, setNextPage] = useState(0);
  const [userCampaigns, setUserCampaigns] = useState<Campaigns>();
  const [currentUser, setCurrentUser] = useState<User>();
  const headers = [`userId`, `userName`, `campaigns`, `cta`];
  /*
   * previous extraneous code
   * const pageLength = user.length;
   * const lastUser = user[pageLength];
   */
  useEffect(() => {
    paginate(nextPage).then((res: User[]) => setUsers([...users, ...res]));
  }, [nextPage]);

  useEffect(() => {
    Promise.resolve(
      currentUser?.campaigns.reduce(
        (acc, campaign) => ({
          ...acc,
          [campaign]: (userCampaigns ?? {})[campaign],
        }),
        {} as Campaigns,
      ),
    ).then((campaigns?: Campaigns) => {
      if (Object.values(campaigns ?? {})[0]) return;
      getCampaigns(currentUser?.campaigns ?? []).then((res) => {
        setUserCampaigns({
          ...userCampaigns,
          ...res.reduce(
            (acc, campaign) => ({
              ...acc,
              [campaign.campaignId]: campaign,
            }),
            {} as Campaigns,
          ),
        });
      });
    });
  }, [currentUser]);

  return (
    <main>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {users.map(({ userId, userName, campaigns }) => (
            <tr key={userName}>
              <td>{userId}</td>
              <td>{userName}</td>
              <td>
                {(userCampaigns ?? {})[campaigns[0]] && (
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <td>campaignId</td>
                        <td>campaignName</td>
                      </tr>
                    </thead>
                    <tbody>
                      {campaigns.map((id) => {
                        const campaign = (userCampaigns ?? {})[id];
                        if (!campaign) return <></>;
                        const { campaignId, campaignName } = campaign;
                        return (
                          <tr key={campaignName}>
                            <td>{campaignId}</td>
                            <td>{campaignName}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </td>

              <td>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentUser({ userId, userName, campaigns })
                  }
                >
                  Get Campaigns
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <button
              type="button"
              onClick={() => setNextPage(users[users.length - 1]?.userId)} // moved the extraneous declaration above here
            >
              Load More
            </button>
          </tr>
        </tfoot>
      </table>
    </main>
  );
}
