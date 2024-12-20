import {ProjectData} from './data/projectData.js';

const PROJECT_DATA_ARRAY_ID_ATTRIBUTE = 'project-data-array-id';
const PROJECT_DATA_ARRAY_INDEX_ATTRIBUTE = 'project-data-array-index';
const DATA_SRC_ATTRIBUTE = 'data-src';
const RESET_LAZY_LOADING = 'modal_image lazyload';
const EMPTY_STRING = '';
const EMPTY_SPACE = ' ';
const DISPLAY_NONE = 'none';
const DISPLAY_BLOCK = 'block';
const DISPLAY_FLEX = 'flex';
const OVERFLOW_HIDDEN = 'hidden';
const OVERFLOW_AUTO = 'auto';
const FIXED_BODY = 'fixed';
const NON_FIXED_BODY = '';
const FIXED_BODY_OFFSET_NEGATIVE_PREFIX = '-';
const PIXEL_SUFFIX = 'px'
const SCROLL_BEHAVIOR_AUTO = 'auto';
const SCROLL_BEHAVIOR_SMOOTH = 'smooth';
const SCROLL_BEHAVIOR_PROPERTY = '--scroll-behavior';
const IPHONE_USER_AGENT_ID = 'iPhone';
const SCROLL_START_VALUE = 0;
const EMPTY_ARRAY_LENGTH = 0;

export class Modal
{
    projects = null;
    modal = null;
    title = null;
    image = null;
    text = null;
    responsibilitiesContainer = null;
    developmentTime = null;
    developmentTimeContainer = null;
    links = null;
    linksContainer = null;
    tools = null;
    toolsContainer = null;
    closeButton = null;
    contentOpacity = null;
    
    Init(contentOpacity)
    {
        this.contentOpacity = contentOpacity;
        this.projects = document.querySelectorAll('.project_section');
        this.modal = document.getElementById('projectModal');
        this.title = document.getElementById('modalTitle');
        this.image = document.getElementById('modalImage');
        this.text = document.getElementById('modalText');
        this.responsibilitiesContainer = document.getElementById('modalResponsibilitiesDiv');
        this.developmentTime = document.getElementById('modalDevTime');
        this.developmentTimeContainer = document.getElementById('modalDevTimeDiv');
        this.links = document.getElementById('modalLinks');
        this.linksContainer = document.getElementById('modalLinksDiv');
        this.tools = document.getElementById('modalTools');
        this.toolsContainer = document.getElementById('modalToolsDiv');
        this.closeButton = document.getElementById('closeButton');
        
        this.RegisterProjectsToOpenModal();
        this.RegisterModalCloseOnButtonClick();
        this.RegisterModalCloseOnOutsideClick();
    }
    
    RegisterProjectsToOpenModal()
    {
        this.projects.forEach(project =>
        {
            let projectDataArrayId = project.getAttribute(PROJECT_DATA_ARRAY_ID_ATTRIBUTE);
            let projectDataArrayIndex = project.getAttribute(PROJECT_DATA_ARRAY_INDEX_ATTRIBUTE);
            let projectData = ProjectData.GetArrayById(projectDataArrayId)[projectDataArrayIndex];
            
            project.onclick = () =>
            {
                this.SetupModalWithProjectData(projectData);
                this.ResolveDataVisibility(projectData);
                this.OpenModal();
            };
        });
    }
    
    SetupModalWithProjectData(projectData)
    {
        this.title.textContent = projectData.title;
        this.image.className = RESET_LAZY_LOADING;
        this.image.src = projectData.imageSrc;
        this.image.setAttribute(DATA_SRC_ATTRIBUTE, projectData.imageDataSrc);
        this.text.innerHTML = `${projectData.descriptions.map(desc => `<p>${desc}</p><br>`).join(EMPTY_STRING)}`;
        this.responsibilitiesContainer.innerHTML = this.GenerateResponsibilitiesText(projectData);
        this.developmentTime.textContent = projectData.developmentTime;
        this.links.innerHTML = `${projectData.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="hyperlink_simple">${link.text} <img src="./assets/sexl.png" class="hyperlink_simple_image"></a>`).join(EMPTY_SPACE)}`;
        this.tools.innerHTML = `${projectData.tools.map(tool => `<span class="project_box_tool" style="background-color: ${tool.backgroundColor};">${tool.name}</span>`).join(EMPTY_SPACE)}`;
    }

    GenerateResponsibilitiesText(projectData) 
    {
        return `
        <p class="modal_subtitle">${projectData.responsibilityTitle}</p>
        <ul class="project_responsibility_list" style="font-size: small">
            ${projectData.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join(EMPTY_STRING)}
        </ul>`;
    }
    
    ResolveDataVisibility(projectData)
    {
        this.linksContainer.style.display = projectData.links.length === EMPTY_ARRAY_LENGTH ? DISPLAY_NONE : DISPLAY_BLOCK;
        this.toolsContainer.style.display = projectData.tools.length === EMPTY_ARRAY_LENGTH ? DISPLAY_NONE : DISPLAY_BLOCK;
        this.responsibilitiesContainer.style.display = projectData.responsibilities.length === EMPTY_ARRAY_LENGTH ? DISPLAY_NONE : DISPLAY_BLOCK;
        this.developmentTimeContainer.style.display = projectData.developmentTime === EMPTY_STRING ? DISPLAY_NONE : DISPLAY_BLOCK;
    }
    
    RegisterModalCloseOnButtonClick()
    {
        this.closeButton.onclick = () =>
        {
            this.CloseModal();
        };
    }

    RegisterModalCloseOnOutsideClick() 
    {
        window.onclick = (event) => 
        {
            if (event.target === this.modal) 
            {
                this.CloseModal();
            }
        };
    }

    OpenModal() 
    {
        document.body.style.overflow = OVERFLOW_HIDDEN;
        this.modal.style.display = DISPLAY_FLEX; // Show modal
        this.modal.scrollTop = SCROLL_START_VALUE; // Ensure the modal starts at the top

        if (this.BrowsingOnIphone())
        {
            this.DisableIphoneScroll();
        }
    }

    CloseModal() 
    {
        this.modal.style.display = DISPLAY_NONE; // Hide modal
        document.body.style.overflow = OVERFLOW_AUTO;

        if (this.BrowsingOnIphone())
        {
            this.EnableIphoneScroll();
        }
    }

    BrowsingOnIphone() 
    {
        return navigator.userAgent.includes(IPHONE_USER_AGENT_ID);
    }

    DisableIphoneScroll() // iOS Hack, workaround for unexpected behaviour on iOS Mobiles apple haven't fixed in more than 12 years.
    {
        this.contentOpacity.SetActive(false);
        let lastIntroOpacity = this.contentOpacity.GetIntroOpacity();
        let lastContentOpacity = this.contentOpacity.GetContentOpacity();
        
        this.lastScrollPosition = window.scrollY;
        document.body.style.position = FIXED_BODY;
        document.body.style.top = `${FIXED_BODY_OFFSET_NEGATIVE_PREFIX}${this.lastScrollPosition}${PIXEL_SUFFIX}`; // Keep track of the body's scroll position, top offset

        this.contentOpacity.SetIntroOpacity(lastIntroOpacity);
        this.contentOpacity.SetContentOpacity(lastContentOpacity);
    }
    
    EnableIphoneScroll() // Same applies as for disabling safari scroll
    {
        document.body.style.position = NON_FIXED_BODY;
        document.body.style.top = EMPTY_STRING; // clears top offset
        this.contentOpacity.SetActive(true);
        this.SetScrollBehaviour(SCROLL_BEHAVIOR_AUTO);
        window.scrollTo(this.lastScrollPosition, this.lastScrollPosition);
        this.SetScrollBehaviour(SCROLL_BEHAVIOR_SMOOTH);
    }
    
    SetScrollBehaviour(value)
    {
        document.documentElement.style.setProperty(SCROLL_BEHAVIOR_PROPERTY, value);
    }
}