$(document).ready(function () {
    $("#calculate_btn").click(function () {
        event.preventDefault();
        if (!$("#form").valid()) return;
        var odd_to_boost = parseFloat($("#odd_to_boost").val());
        var boost_percentage = parseFloat($("#boost_percentage").val());
        var odd1 = odd_to_boost + (odd_to_boost * boost_percentage / 100);
        var max_extra_profit = parseFloat($("#max_extra_profit").val());
        var stake_1 = max_extra_profit / (odd1 - odd_to_boost);
        var payout_1 = stake_1 * odd1;
        var odd2 = parseFloat($("#odd_2").val());
        var min_stake = parseFloat($("#min_stake").val());
        var stake_2 = Math.max(min_stake, payout_1 / odd2);
        var payout_2 = stake_2 * odd2;

        $("#boosted_odd").text("Boosted odd: " + odd1);
        $("#stake_1").text("Stake: " + stake_1);
        $("#payout_1").text("Payout: " + payout_1);

        $("#stake_2").text("Stake: " + stake_2);
        $("#payout_2").text("Payout: " + payout_2);

        var total_stake = stake_1 + stake_2;
        var min_profit = Math.min(payout_1, payout_2) - total_stake;
        var max_profit = Math.max(payout_1, payout_2) - total_stake;
        $("#total_stake").text("Total stake: " + total_stake);
        $("#min_profit").text("Min profit: " + min_profit);
        $("#max_profit").text("Max profit: " + max_profit);





        // var boost_cap = $("#boost_cap").val();
        // var boostOdd = $("#boosted_odd").val();
        // var baseOdd = $("#base_odd").val();
        // var stake = $("#stake").val();
        // var stakeBoost = Math.min(boost_cap, stake)
        // var payoutBoost = stakeBoost * boostOdd
        // var stakeNormal = stake - stakeBoost
        // var payoutNormal = stakeNormal * baseOdd
        // var payout = payoutBoost + payoutNormal
        // var avgOdd = payout / stake

        // $("#total_payout").text("Total Payout: €" + payout)
        // $("#result_boost").text("Boost stake: €" + stakeBoost + " with odd: " + boostOdd + " has payout: €" + payoutBoost)
        // $("#result_base").text("Normal stake: €" + stakeNormal + " with odd: " + baseOdd + " has payout: €" + payoutNormal)
        // $("#average_odd").text("Odd for this stake: " + avgOdd)
    });
});
