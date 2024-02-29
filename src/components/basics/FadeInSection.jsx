import React from "react";

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => props.isVisible !== undefined ? props.setVisible(entry.isIntersecting) : setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <section
            id={props.id}
            className={`fade-in-section ${(props.isVisible !== undefined ? props.isVisible : isVisible) ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </section>
    );
}

export default FadeInSection