SELECT r1.player, r1.score as g1s, r2.score as g2s, r1.score+r2.score as total
FROM round_one r1
INNER JOIN round_two r2
ON r1.player = r2.player
WHERE r2.score <> 0
ORDER BY total, player
