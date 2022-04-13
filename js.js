function showDiv(prefix,chooser){
    for(var i=0;i<chooser.options.length;i++) {
        var div = document.getElementById(prefix+chooser.options[i].value);
        div.style.display = 'none';
    }
    var selectedOption = (chooser.options[chooser.selectedIndex].value);
    if(selectedOption == "1"){
        displayDiv(prefix,"1");
    }
    if(selectedOption == "2"){
        displayDiv(prefix,"2");
    }
}
function displayDiv(prefix,suffix) {
    var div = document.getElementById(prefix+suffix);
    div.style.display = 'block';
}

function sem1w(){
   document.write('<a download href="Sem1/wiai/wiai_21_09_22.zip" class="pol">2021.09.22</a><br><a download href="Sem1/wiai/wiai_21_09_29.zip" class="pol">2021.09.29</a><br><a download href="Sem1/wiai/wiai_21_10_13.zip" class="pol">2021.10.13</a><br><a download href="Sem1/wiai/wiai_21_10_20.zip" class="pol">2021.10.20</a><br><a download href="Sem1/wiai/wiai_21_11_03.zip" class="pol">2021.11.03</a><br><a download href="Sem1/wiai/wiai_21_11_10.zip" class="pol">2021.11.10</a><br><a download href="Sem1/wiai/wiai_21_11_17.zip" class="pol">2021.11.17</a><br><a download href="Sem1/wiai/wiai_21_11_24.zip" class="pol">2021.11.24</a><br><a download href="Sem1/wiai/wiai_21_12_01.zip" class="pol">2021.12.01</a><br><a download href="Sem1/wiai/wiai_21_12_08.zip" class="pol">2021.12.08</a><br><a download href="Sem1/wiai/wiai_21_12_15.zip" class="pol">2021.12.15</a><br>')
}
function sem2w(){
    document.write('<a download href="Sem2/wiai/wiai_22_01_20.zip" class="pol">2022.01.20</a><br><a download href="Sem2/wiai/wiai_22_01_25.zip" class="pol">2022.01.25</a><br><a download href="Sem2/wiai/wiai_22_02_18.zip" class="pol">2022.02.18</a><br><a download href="Sem2/wiai/wiai_22_02_25.zip" class="pol">2022.02.25</a><br><a download href="Sem2/wiai/wiai_22_03_04.zip" class="pol">2022.03.04</a><br><a download href="Sem2/wiai/wiai_22_03_11.zip" class="pol">2022.03.11</a><br><a download href="Sem2/wiai/wiai_22_03_18.zip" class="pol">2022.03.18</a><br><a download href="Sem2/wiai/wiai_22_03_25.zip" class="pol">2022.03.25</a><br><a download href="Sem2/wiai/wiai_22_04_01.zip" class="pol">2022.04.01</a>')
}
function sem1t(){
    document.write('<a download href="Sem1/tsiai/tsiai_21_09_14.zip" class="pol">2021.09.14</a><br><a download href="Sem1/tsiai/tsiai_21_09_23.zip" class="pol">2021.09.23</a><br><a download href="Sem1/tsiai/tsiai_21_09_30.zip" class="pol">2021.09.30</a><br><a download href="Sem1/tsiai/tsiai_21_10_07.zip" class="pol">2021.10.07</a><br><a download href="Sem1/tsiai/tsiai_21_10_21.zip" class="pol">2021.10.21</a><br><a download href="Sem1/tsiai/tsiai_21_10_28.zip" class="pol">2021.10.28</a><br><a download href="Sem1/tsiai/tsiai_21_11_04.zip" class="pol">2021.11.04</a><br><a download href="Sem1/tsiai/tsiai_21_11_18.zip" class="pol">2021.11.18</a><br><a download href="Sem1/tsiai/tsiai_21_11_25.zip" class="pol">2021.11.25</a><br><a download href="Sem1/tsiai/tsiai_21_12_02.zip" class="pol">2021.12.02</a><br><a download href="Sem1/tsiai/tsiai_21_12_07.zip" class="pol">2021.12.07</a>')
}
function sem2t(){
    document.write('<a download href="Sem2/tsiai/tsiai_22_01_11.zip" class="pol">2022.01.11</a><br><a download href="Sem2/tsiai/tsiai_22_01_24.zip" class="pol">2022.01.24</a><br><a download href="Sem2/tsiai/tsiai_22_02_14.zip" class="pol">2022.02.14</a><br><a download href="Sem2/tsiai/tsiai_22_02_21.zip" class="pol">2022.02.21</a><br><a download href="Sem2/tsiai/tsiai_22_02_28.zip" class="pol">2022.02.28</a><br><a download href="Sem2/tsiai/tsiai_22_03_14.zip" class="pol">2022.03.14</a><br><a download href="Sem2/tsiai/tsiai_22_03_28.zip" class="pol">2022.03.28</a><br><a download href="Sem2/tsiai/tsiai_22_04_04.zip" class="pol">2022.04.04</a><br><a download href="Sem2/tsiai/tsiai_22_04_11.zip" class="pol">2022.04.11</a>')
}
function sem1m(){
    document.write('<a download href="Sem1/monikonf/monikonf_21_11_05.zip" class="pol">2021.11.05</a><br><a download href="Sem1/monikonf/monikonf_21_11_19.zip" class="pol">2021.11.19</a>')
}
function sem2m(){
    document.write('<a download href="Sem2/monikonf/monikonf_22_02_23.zip" class="pol">2022.02.23</a><br><a download href="Sem2/monikonf/monikonf_22_03_02.zip" class="pol">2022.03.02</a><br><a download href="Sem2/monikonf/monikonf_22_03_16.zip" class="pol">2022.03.16</a><br><a download href="Sem2/monikonf/monikonf_22_03_23.zip" class="pol">2022.03.23</a><br><a download href="Sem2/monikonf/monikonf_22_03_30.zip" class="pol">2022.03.30</a><br><a download href="Sem2/monikonf/monikonf_22_04_06.zip" class="pol">2022.04.06</a>')
}
function sem2s(){
    document.write('<a download href="Sem2/sbd/sbd_22_02_23.zip" class="pol">2022.02.23</a><br><a download href="Sem2/sbd/sbd_22_03_02.zip" class="pol">2022.03.02</a><br><a download href="Sem2/sbd/sbd_22_03_16.zip" class="pol">2022.03.16</a><br><a download href="Sem2/sbd/sbd_22_03_30.zip" class="pol">2022.03.30</a><br><a download href="Sem2/sbd/sbd_22_04_06.zip" class="pol">2022.04.06</a><br><a download href="Sem2/sbd/sbd_22_04_13.zip" class="pol">2022.04.13</a>')
}

//<a download href="*.zip" class="pol">data</a><br>
