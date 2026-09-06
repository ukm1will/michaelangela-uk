SELECT g1.player_one, g1.player_two,
                                          coalesce(g1s, 0) AS g1s, 
                                          coalesce(g2s, 0) AS g2s, 
                                          coalesce(g3s, 0) AS g3s, 
                                          coalesce(g4s, 0) AS g4s, 
                                          coalesce(g5s, 0) AS g5s, 
                                          coalesce(g6s, 0) AS g6s
                                        FROM ( 
                                               SELECT t.team_id tid, player_one, player_two, c.team_id, c.score g1s 
                                               FROM teams t 
                                                 FULL OUTER JOIN competitions c 
                                                   ON t.team_id = c.team_id 
                                                      AND c.competition_id = 1 
                                               WHERE t.team_id IS NOT NULL 
                                             ) g1 FULL OUTER JOIN ( 
                                                                    SELECT t.team_id tid, player_one, player_two, c.team_id, c.score g2s 
                                                                    FROM teams t 
                                                                      FULL OUTER JOIN competitions c 
                                                                        ON t.team_id = c.team_id 
                                                                           AND c.competition_id = 2 
                                                                    WHERE t.team_id IS NOT NULL 
                                                                  ) g2 
                                            ON g1.tID = g2.tID 
                                          FULL OUTER JOIN  ( 
                                                             SELECT t.team_id tid, player_one, player_two, c.team_id, c.score g3s 
                                                             FROM teams t 
                                                               FULL OUTER JOIN competitions c 
                                                                 ON t.team_id = c.team_id 
                                                                    AND c.competition_id = 3 
                                                             WHERE t.team_id IS NOT NULL 
                                                           ) g3 
                                            ON g1.tID = g3.tID 
                                          FULL OUTER JOIN  ( 
                                                             SELECT t.team_id tid, player_one, player_two, c.team_id, c.score g4s 
                                                             FROM teams t 
                                                               FULL OUTER JOIN competitions c 
                                                                 ON t.team_id = c.team_id 
                                                                    AND c.competition_id = 4 
                                                             WHERE t.team_id IS NOT NULL 
                                                           ) g4 
                                            ON g1.tID = g4.tID 
                                          FULL OUTER JOIN  ( 
                                                             SELECT t.team_id tid, player_one, player_two, c.team_id, c.score g5s 
                                                             FROM teams t 
                                                               FULL OUTER JOIN competitions c 
                                                                 ON t.team_id = c.team_id 
                                                                    AND c.competition_id = 5 
                                                             WHERE t.team_id IS NOT NULL 
                                                           ) g5 
                                            ON g1.tID = g5.tID 
                                          FULL OUTER JOIN  ( 
                                                             SELECT t.team_id tid, player_one, player_two, c.team_id, c.score g6s 
                                                             FROM teams t 
                                                               FULL OUTER JOIN competitions c 
                                                                 ON t.team_id = c.team_id 
                                                                    AND c.competition_id = 6 
                                                             WHERE t.team_id IS NOT NULL 
                                                           ) g6 
                                            ON g1.tID = g6.tID
