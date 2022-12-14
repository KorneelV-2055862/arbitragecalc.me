$(document).ready(function () {
    $("#calculate_btn").click(function () {

        event.preventDefault();
        if (!$("#form").valid()) return;
        var boost_cap = $("#boost_cap").val();
        var boostOdd = $("#boosted_odd").val();
        var baseOdd = $("#base_odd").val();
        var stake = $("#stake").val();
        var stakeBoost = Math.min(boost_cap, stake)
        var payoutBoost = stakeBoost * boostOdd
        var stakeNormal = stake - stakeBoost
        var payoutNormal = stakeNormal * baseOdd
        var payout = payoutBoost + payoutNormal
        var avgOdd = payout / stake

        $("#total_payout").text("Total Payout: €" + payout)
        $("#result_boost").text("Boost stake: €" + stakeBoost + " with odd: " + boostOdd + " has payout: €" + payoutBoost)
        $("#result_base").text("Normal stake: €" + stakeNormal + " with odd: " + baseOdd + " has payout: €" + payoutNormal)
        $("#average_odd").text("Odd for this stake: " + avgOdd)
    });
});
