import React, { Component } from "react";
import "./App.css";
import Error from "./components/Error";
import Header from "./components/Header";
import Search from "./components/Search";
import hiscores from "osrs-json-hiscores";
import Loader from "react-loader-spinner";
import Username from "./components/Username";
import Skills from "./components/Skills";


class App extends Component {
  state = {
    error: false,
    loading: false,
    showResults: false,
    username: undefined,
    skills: [
      {
        agility: {
          level: undefined,
          xp: undefined
        },
        attack: {
          level: undefined,
          xp: undefined
        },
        construction: {
          level: undefined,
          xp: undefined
        },
        cooking: {
          level: undefined,
          xp: undefined
        },
        crafting: {
          level: undefined,
          xp: undefined
        },
        defence: {
          level: undefined,
          xp: undefined
        },
        farming: {
          level: undefined,
          xp: undefined
        },
        firemaking: {
          level: undefined,
          xp: undefined
        },
        fishing: {
          level: undefined,
          xp: undefined
        },
        fletching: {
          level: undefined,
          xp: undefined
        },
        herblore: {
          level: undefined,
          xp: undefined
        },
        hitpoints: {
          level: undefined,
          xp: undefined
        },
        hunter: {
          level: undefined,
          xp: undefined
        },
        magic: {
          level: undefined,
          xp: undefined
        },
        mining: {
          level: undefined,
          xp: undefined
        },
        overall: {
          level: undefined,
          xp: undefined
        },
        prayer: {
          level: undefined,
          xp: undefined
        },
        ranged: {
          level: undefined,
          xp: undefined
        },
        runecraft: {
          level: undefined,
          xp: undefined
        },
        slayer: {
          level: undefined,
          xp: undefined
        },
        smithing: {
          level: undefined,
          xp: undefined
        },
        strength: {
          level: undefined,
          xp: undefined
        },
        thieving: {
          level: undefined,
          xp: undefined
        },
        woodcutting: {
          level: undefined,
          xp: undefined
        }
      }
    ]
  };

  getUsers = async e => {
    e.preventDefault();
    this.setState({
      error: false,
      loading: true,
      showResults: false,
      username: undefined
    });
    const USER_NAME = e.target.elements.userName.value;
    const api_call = await hiscores
      .getStats(`${USER_NAME}`, "main", {headers: {'Access-Control-Allow-Origin': '*'}})
      .then(res => {
        let userName = res.rsn;
        let data = res.main.stats;

        this.setState({
          loading: false,
          showResults: true,
          username: userName,
          skills: [
            {
              agility: {
                level: data.agility.level,
                xp: data.agility.xp
              },
              attack: {
                level: data.attack.level,
                xp: data.attack.xp
              },
              construction: {
                level: data.construction.level,
                xp: data.construction.xp
              },
              cooking: {
                level: data.cooking.level,
                xp: data.cooking.xp
              },
              crafting: {
                level: data.crafting.level,
                xp: data.crafting.xp
              },
              defence: {
                level: data.defence.level,
                xp: data.defence.xp
              },
              farming: {
                level: data.farming.level,
                xp: data.farming.xp
              },
              firemaking: {
                level: data.firemaking.level,
                xp: data.firemaking.xp
              },
              fishing: {
                level: data.fishing.level,
                xp: data.fishing.xp
              },
              fletching: {
                level: data.fletching.level,
                xp: data.fletching.xp
              },
              herblore: {
                level: data.herblore.level,
                xp: data.herblore.xp
              },
              hitpoints: {
                level: data.hitpoints.level,
                xp: data.hitpoints.xp
              },
              hunter: {
                level: data.hunter.level,
                xp: data.hunter.xp
              },
              magic: {
                level: data.magic.level,
                xp: data.magic.xp
              },
              mining: {
                level: data.mining.level,
                xp: data.mining.xp
              },
              overall: {
                level: data.overall.level,
                xp: data.overall.xp
              },
              prayer: {
                level: data.prayer.level,
                xp: data.prayer.xp
              },
              ranged: {
                level: data.ranged.level,
                xp: data.ranged.xp
              },
              runecraft: {
                level: data.runecraft.level,
                xp: data.runecraft.xp
              },
              slayer: {
                level: data.slayer.level,
                xp: data.slayer.xp
              },
              smithing: {
                level: data.smithing.level,
                xp: data.smithing.xp
              },
              strength: {
                level: data.strength.level,
                xp: data.strength.xp
              },
              thieving: {
                level: data.thieving.level,
                xp: data.thieving.xp
              },
              woodcutting: {
                level: data.woodcutting.level,
                xp: data.woodcutting.xp
              }
            }
          ]
        });
      })
      .catch(err => (this.setState({error: true, loading: false})
      ))
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Search getUsers={this.getUsers} />
        {this.state.loading ? ( <span className="loader">
          <Loader
            type="Triangle"
            color="white"
            height={50}
            width={50}
          />
          </span>
          
        ) : null}
        <Error error={this.state.error} />
        <div className="list-container">
          <Username userName={this.state.username} />
          {this.state.showResults ? (
            <Skills totalSkills={this.state.skills} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
