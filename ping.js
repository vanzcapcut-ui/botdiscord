module.exports = {
    name: "ping",
    description: "Cek ping bot",
    execute(interaction) {
        interaction.reply(`Pong! Latency: ${Date.now() - interaction.createdTimestamp}ms`);
    }
};
